"use strict";
const simplyCountdownCountup = document.querySelector("#simply-countdown-countup");
const nodeSimplySecondsSections = document.querySelectorAll(".simply-seconds-section");
const arraySimplySecondsSections = Array.from(nodeSimplySecondsSections);
const nodeSimplyDaysSections = document.querySelectorAll(".simply-days-section");
const arraySimplyDaysSections = Array.from(nodeSimplyDaysSections);
const nodesimplyHoursSections = document.querySelectorAll(".simply-hours-section");
const arraySimplyHoursSections = Array.from(nodesimplyHoursSections);
const nodesSimplyMinutesSections = document.querySelectorAll(".simply-minutes-section");
const arraySimplyMinutesSections = Array.from(nodesSimplyMinutesSections);
const nodeSimplyAmounts = document.querySelectorAll(".simply-amount");
const arraySimplyAmounts = Array.from(nodeSimplyAmounts);
const countDownDate = new Date("Sep 13, 2024 15:37:25").getTime();
const x = setInterval(() => {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / (1000));
    arraySimplyDaysSections.forEach((arryaSimplyDaysSection) => {
        const day = arryaSimplyDaysSection.querySelector(".simply-amount");
        day.innerHTML = `${days}`;
    });
    arraySimplyHoursSections.forEach((SimplyHoursSection) => {
        const hour = SimplyHoursSection.querySelector(".simply-amount");
        hour.innerHTML = `${hours}`;
    });
    arraySimplyMinutesSections.forEach((arryaSimplyMinutesSection) => {
        const minute = arryaSimplyMinutesSection.querySelector(".simply-amount");
        minute.innerHTML = `${minutes}`;
    });
    arraySimplySecondsSections.forEach((SimplySecondsSection) => {
        const second = SimplySecondsSection.querySelector(".simply-amount");
        second.innerHTML = `${seconds}`;
    });
    const upDistance = (now - countDownDate);
    const upDays = Math.floor((upDistance / (1000 * 60 * 60 * 24) + 366));
    const upHours = Math.floor(((upDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + 24);
    const upMinutes = Math.floor(((upDistance % (1000 * 60 * 60)) / (1000 * 60)) + 60);
    const upSeconds = Math.floor(((upDistance % (1000 * 60)) / (1000)) + 60);
    const upDaySelector = simplyCountdownCountup.querySelector(".simply-days-section");
    const upDay = upDaySelector.querySelector(".simply-amount");
    upDay.innerHTML = `${upDays}`;
    const upHourSelector = simplyCountdownCountup.querySelector(".simply-hours-section");
    const upHour = upHourSelector.querySelector(".simply-amount");
    upHour.innerHTML = `${upHours}`;
    const upMinuteSelector = simplyCountdownCountup.querySelector(".simply-minutes-section");
    const upMinute = upMinuteSelector.querySelector(".simply-amount");
    upMinute.innerHTML = `${upMinutes}`;
    const upSecondSelector = simplyCountdownCountup.querySelector(".simply-seconds-section");
    const upSecond = upSecondSelector.querySelector(".simply-amount");
    upSecond.innerHTML = `${upSeconds}`;
    if (distance < 0) {
        clearInterval(x);
        window.document.getElementById("demo").innerHTML = `EXPIRED`;
    }
}, 1000);
