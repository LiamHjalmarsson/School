export const updateAchievements = (user, name, points) => {
    let updatedAch = [...user.achievements];

    let hasAchievement = updatedAch.some(achievement => achievement.name === name);

    if (!hasAchievement) {
        updatedAch.push({
            name,
            points
        });
    }
    
    return updatedAch;
};
