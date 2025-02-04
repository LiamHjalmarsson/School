import React, { createContext, useContext, useEffect } from 'react';
import { Outlet, useLoaderData } from "react-router-dom"

export const profileContext = createContext();

export const profileLoading = async () => {
    
    try {
        let response = await fetch("/api/rank");
        let responseAch = await fetch("/api/achievement");
        let responseUser = await fetch("/api/users/current-user");
        let responsePurchase = await fetch("/api/purchase");
            
        if (!response.ok) {
            return false;
        }

        let recourse = await response.json();
        let recourseAch = await responseAch.json();
        let recourseUser = await responseUser.json();
        let recoursePurchase = await responsePurchase.json();

        if (recourse) {
            return {
                ranks: recourse,
                achievements: recourseAch,
                user: recourseUser,
                purchase: recoursePurchase
            };
        }
    } catch (error) {
        return error;
    }
}

const Profile = () => {
    let { ranks, user, achievements, purchase } = useLoaderData();

    let sortedRanks = ranks.sort((a, b) => a.thresholdPoints - b.thresholdPoints);

    let highestRankUnlocked = sortedRanks.find(rank => user.user.rank.some(userRank => userRank === rank._id));

    let nextRankIndex = sortedRanks.findIndex(rank => rank.thresholdPoints > user.user.totalPointsEarned);
    let nextRankToUnlock = nextRankIndex !== -1 ? sortedRanks[nextRankIndex] : null;

    let unlockedRanks = ranks.filter(rank => user.user.rank.includes(rank._id));
    let lockedRanks = ranks.filter(rank => !user.user.rank.includes(rank._id));

    return (
        <profileContext.Provider
            value={{
                ranks,
                achievements,
                user: user.user,
                highestRankUnlocked,
                nextRankToUnlock,
                lockedRanks,
                unlockedRanks,
                purchase
            }}
        >
            <Outlet />
        </profileContext.Provider>
    );
}

export const useProfileContext = () => useContext(profileContext);

export default Profile;
