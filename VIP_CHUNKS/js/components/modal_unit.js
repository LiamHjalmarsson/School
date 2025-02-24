import state_io from "../utils/state_io.js";
import { SubPub } from "../utils/subpub.js";
import utils from "../utils/utils.js";

export default { }

// INIT
;(() => {

  SubPub.subscribe({
    event: "render::modal::unit",
    listener: render
  });

  SubPub.subscribe({
    event: "render::modal::new_unit",
    listener: ({ element }) => {
      const course_id = element.course_id;
      const unit_id = element.unit_id;
  
      utils.push_state_window_history(`?course=${course_id}&unit=${unit_id}`);
  
      SubPub.publish({
        event: "render::modal::unit",
        detail: { element }
      });    
    }
  });

  SubPub.subscribe({
    event: "db::patch::unit::done",
    listener: ({ response, params }) => {

      // EXE, VID & ASS: Only re-render as required, to avoid iFrame reload
      // QUIZ: Re-render to get all changes to questions and options

      if (response.element.kind === "quiz") {

        render ({ element: response.element });
        
      } else {

        params.updated_fields.forEach( one_field => {        
          let { field } = one_field;
          if (field === "spot" || field === "is_stop_quiz") field = "name";
          if (field === "video_link") field = "videos";
          if (field === "folder_link") field = "folder";
          renderers["render_" + field]({ element: response.element });
        });
  
      }

    }
  });

  SubPub.subscribe({
    event: "db::patch::users_units::done",
    listener: ({ response, params }) => {
      const element = state_io.state.units.find(u => u.unit_id === response.users_unit["unit_id"]);
      render_checks({ element });
    }
  });


})();

function close_modal () {
  const get_parameters_string = utils.get_parameters_string(["course"]);
  utils.push_state_window_history(`?${get_parameters_string}`)
  
  document.querySelector("#modal").classList.add("hidden");
}

function render ({ element }) {
  
  const dom = document.querySelector("#modal .content");
  dom.classList.add(element.kind);

  dom.innerHTML = `
    <div class="left"></div>
    <div class="right"></div>
  `;


  // COMPONENTS
  const components = {
    video: {
      left: ["name", "story", "videos"],
      right: ["checks", "notes", "folder"],
    },
    exercise: {
      left: ["name", "story", "videos"],
      right: ["checks", "notes", "folder"],
    },
    quiz: {
      left: ["name", "quiz"],
      right: ["checks", "notes"],
    },
    assignment: {
      left: ["name", "story", "videos"],
      right: ["checks", "notes", "folder"],
    },
  };

  const doms = {
    left: dom.querySelector(".left"),
    right: dom.querySelector(".right"),
  };

  for (const side in doms) {

    components[element.kind][side].forEach(component => {
      const container_dom = document.createElement("div");
      doms[side].append(container_dom);
      renderers["render_" + component]({ element, container_dom });
    });
  
  }

  // SHOW MODAL
  document.getElementById("modal").classList.remove("hidden");


  // CLOSE VIA CLICK ON BACKGROUND or PRESS KEY ESC
  document.querySelector("#modal").addEventListener("click", e => {
    if (e.target.id === "modal") close_modal();
  });
  document.querySelector("html").addEventListener("keyup", e => {
    if (e.key === "Escape" && !document.getElementById("modal").classList.contains("hidden")) {
      close_modal();
    }
  });

}

const renderers = {
  render_name, render_story, render_videos, render_checks, render_notes, render_folder, render_quiz,
}

function render_name ({ element, container_dom }) {
  
  if (!container_dom) {
    container_dom = document.querySelector("#modal .content .name");
  } else {
    container_dom.classList.add("name");
  }

  const name_html = element.kind === "quiz" ? "" : ` : ${element.name}`;
  const class_stop_quiz = element.is_stop_quiz ? "stop_quiz" : "";

  container_dom.innerHTML = `
    <button class="button_close">CLOSE ${element.kind.toUpperCase()}</button>
    <button class="button_edit teacher">EDIT ${element.kind.toUpperCase()}</button>
    <button class="button_delete teacher">DELETE ${element.kind.toUpperCase()}</button>
    <h2 class="${class_stop_quiz}"><span class="teacher">(id: ${element.unit_id})</span>${state_io.bullet_number_element(element)}. ${element.kind}${name_html}</h2>
  `;

  container_dom.querySelector(".button_edit").addEventListener("click", open_editor);
  container_dom.querySelector(".button_close").addEventListener("click", close_modal);
  container_dom.querySelector(".button_delete").addEventListener("click", delete_unit);


  // FUNCTION
  function open_editor() {
    SubPub.publish({
      event: "render::editor",
      detail: { element: state_io.state.units.find(u => u.unit_id === element.unit_id) } // User may have edited element and it has been updated in State
    });
  }

  function delete_unit () {
    
    if (!confirm("Delete this unit? No undos!")) return;
    
    SubPub.publish({
      event: "db::delete::unit::request",
      detail: { params: { 
        element,
        section: state_io.state.sections.find(s => s.section_id === element.section_id), 
      }}
    });

    close_modal();

  }

  // THIS SPECIFIC ELEMENT EDITING?
  let is_editing = utils.get_parameter("edit_kind") && utils.get_parameter("edit_kind") === "unit";
  is_editing = is_editing && utils.get_parameter("edit_id") && utils.get_parameter("edit_id") === element.unit_id;
  is_editing && open_editor();

}

function render_story ({ element, container_dom }) {

  if (!container_dom) {
    container_dom = document.querySelector("#modal .content .story");
  } else {
    container_dom.classList.add("story");
  }

  const video_inplace = !!element.video_link;
  const story_class_large = video_inplace ? "" : "large";
  
  story_class_large && container_dom.classList.add(story_class_large);
  container_dom.innerHTML = `<div>${element.story || 'No description available'}</div>`;

}

function render_videos ({ element, container_dom }) {
  
  if (!container_dom) {
    container_dom = document.querySelector("#modal .content .videos");
  } else {
    container_dom.classList.add("videos");
  }

  const video_inplace = !!element.video_link;
  const video_html = video_inplace ?
                    `<iframe src="https://mau.app.box.com/embed/s/${element.video_link}?sortColumn=date&view=list" allowfullscreen webkitallowfullscreen msallowfullscreen></iframe>` :
                    ``;

  if (video_inplace) {
    container_dom.classList.add("large");
  } else {
    container_dom.classList.remove("large");
  }

  container_dom.innerHTML = video_html;

}

function render_checks ({ element, container_dom }) {
  
  if (!container_dom) {
    container_dom = document.querySelector("#modal .content .checks");
  } else {
    container_dom.classList.add("checks");
  }

  const users_unit = state_io.state.users_units.find(u => u.unit_id === element.unit_id);
  const is_quiz = element.kind === "quiz";
  const is_ready = is_unit_ready({ element });

  // console.log("is_ready", is_ready);


  // STATUS
  if (users_unit) {
    users_unit.check_question ? container_dom.classList.add("status_question") : container_dom.classList.remove("status_question");
    users_unit.check_complete ? container_dom.classList.add("status_complete") : container_dom.classList.remove("status_complete");
  }

  const empty_title = !is_ready ? 'title="Unit still being worked on"' : "";

  container_dom.innerHTML = `
    <div class="content" ${empty_title}>
      <div class="question_mark"></div>
      <h2>CHECK STATUS</h2>
      <div class="checks_container">

        ${check_box_html("question")}
        ${is_quiz ? "" : check_box_html("complete")}

      </div>
    </div>
  `;

  // CHECK ACTIONS
  is_ready && container_dom.querySelectorAll(".check_holder").forEach(x => x.addEventListener("change", patch_users_unit));


  function check_box_html(which) {

    const checks = {
      question: {
        exercise: "Jag har en specifik fråga om denna övning",
        video: "Jag har en specifik fråga om denna video",
        quiz: "Jag har en specifik fråga om denna quiz",
        assignment: "Jag har en specifik fråga om denna uppgift",
      },
      complete: {
        exercise: "Jag har (äntlingen?) klarat övningen utan att kolla på lösningen",
        video: "Jag förstår allt som sägs i denna video",
        assignment: "Jag har lämnat in denna uppgift och fått G på den",
      }
    };

    const id = `check_box_${which}_${element.unit_id}`;
    const checked = (users_unit && users_unit[`check_${which}`]) ? "checked": "";
    const disabled = !is_ready ? "disabled" : "";

    return `
        <div class="check_holder">
          <input type="checkbox" ${checked} class="updatable" id="${id}" ${disabled}
              data-update_data='${JSON.stringify({
                field_name: 'check_' + which,
                element
              })}'  
          >
          <label for="${id}">${checks[which][element.kind]}</label>
        </div>
    `;
  }

}

function render_notes ({ element, container_dom }) {
  
  const users_unit = state_io.state.users_units.find(u => u.unit_id === element.unit_id);
  const notes = users_unit ? users_unit.notes : "";
  const is_ready = is_unit_ready({ element });


  if (!container_dom) {
    container_dom = document.querySelector("#modal .content .notes");
  } else {
    container_dom.classList.add("notes");
  }
  
  const empty_title = !is_ready ? 'title="Unit still being worked on"' : "";
  const disabled = !is_ready ? "disabled" : "";

  container_dom.innerHTML = `
    <div class="notes_top">
      <h2>NOTES</h2>
      <div class="saver">
        <div class="feedback_save" data-saved_feedback="Saved. Waiting for input">
          <span>Status:</span>
          <span class="feedback">Waiting for input</span>
        </div>
        <button class="button_save">SAVE</button>
      </div>
    </div>
    <textArea class="updatable" ${disabled} ${empty_title}
                  data-update_data='${JSON.stringify({
                    field_name: 'notes',
                    element
                  })}'  
    >${notes}</textArea>
  `;

  const text_area_dom = container_dom.querySelector(".notes textArea");
  text_area_dom.addEventListener("change", patch_users_unit);
  text_area_dom.addEventListener("keyup", start_saver_up);

  // SAVER
  // Change will trigger automatically if user clicks on save button, so no need for specific listener
  const feedback_save_dom = container_dom.querySelector(".feedback_save");
  function start_saver_up (event) {
    feedback_save_dom.dataset.seconds_left = 5;
    update_saver_timer();
    if (feedback_save_dom.dataset.timer_id !== -1) clearTimeout(feedback_save_dom.dataset.timer_id);
    feedback_save_dom.dataset.timer_id = setTimeout(one_second_less, 1000);
  }

  function one_second_less () {
    
    const seconds_left = parseInt(feedback_save_dom.dataset.seconds_left);
    if (seconds_left === -1) return;

    if (seconds_left < 1) {
      const change_event = new CustomEvent("change");
      feedback_save_dom.dataset.timer_id = -1;
      text_area_dom.dispatchEvent(change_event);
      update_saver_timer(feedback_save_dom.dataset.saved_feedback);
    } else {
      feedback_save_dom.dataset.timer_id = setTimeout(one_second_less, 1000);
      feedback_save_dom.dataset.seconds_left = seconds_left - 1;
      update_saver_timer();
    }

  }

}

function render_folder ({ element, container_dom }) {

  if (!container_dom) {
    container_dom = document.querySelector("#modal .content .folder");
  } else {
    container_dom.classList.add("folder");
  }

  const folder_inplace = !!element.folder_link;
  const folder_html = folder_inplace ?
                    `<iframe src="https://mau.app.box.com/embed/s/${element.folder_link}?sortColumn=date&view=list" frameborder="0" allowfullscreen webkitallowfullscreen msallowfullscreen></iframe>`:
                    `<p>No folder set for this ${element.kind}</p>`;
  
  if (folder_inplace) {
    container_dom.classList.add("large");
  } else {
    container_dom.classList.remove("large");
  }
  
  container_dom.innerHTML = `
    ${folder_html}
  `;

}

function render_quiz ({ element, container_dom }) {

  SubPub.publish({
    event: "render_quiz::modal_unit_quiz",
    detail: {element, container_dom}
  })

};

function is_unit_ready ({ element }) {
  
  const is_quiz = element.kind === "quiz";

  return  state_io.state.course.role === "teacher"
          || state_io.state.course.role === "amanuens"
          || (is_quiz ? element.name === "Done" : element.story !== "");

}

function update_saver_timer (feedback) {
  const feedback_save_dom = document.querySelector("#modal .content .notes .feedback_save");
  feedback_save_dom.querySelector(".feedback").innerHTML = feedback || `Saving in ${feedback_save_dom.dataset.seconds_left} seconds`;
}

function patch_users_unit (event) {

  // Stop potential timer
  const feedback_save_dom = document.querySelector("#modal .content .notes .feedback_save");
  if (feedback_save_dom.dataset.timer_id !== -1) {
    update_saver_timer(feedback_save_dom.dataset.saved_feedback);
    clearTimeout(feedback_save_dom.dataset.timer_id);
  }

  const type = event.target.type;
  const value = type === "checkbox" ? event.target.checked : event.target.value;
  const { field_name, element } = JSON.parse(event.target.dataset.update_data);
  
  SubPub.publish({
    event: "db::patch::users_units::request",
    detail: { params: {
      field_name,
      value,
      unit_id: element.unit_id,
      user_id: state_io.state.user.user_id,
    }}
  });

}
