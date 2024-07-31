
//Small Sceen Navbar Toggle
//************************************************************************

let smallScreenNav =document.querySelector(".navSmallScreen");
let collapseBtn =document.querySelector(".collapseBtn");

collapseBtn.addEventListener("click",function(){
    smallScreenNav.classList.toggle("displayNone");
});


//************************************************************************
//To Change Skill Tab
//****************************************************************************
let techSkill = document.querySelector(".techSkills");
let softSkill = document.querySelector(".softSkills");

let techSkillsList = document.querySelector(".techSkillsList");
let softSkillsList = document.querySelector(".softSkillsList");

//EventListener for Soft Siklls
softSkill.addEventListener("click",function(){
    techSkillsList.classList.add("displayNone");
    softSkillsList.classList.remove("displayNone");

    softSkill.classList.add("softTab");
    softSkill.classList.remove("techNTab","textBlue");

    techSkill.classList.add("textBlue","softNTab");
    techSkill.classList.remove("techTab");
});

//EventListener for Technical Siklls
techSkill.addEventListener("click",function(){
    techSkillsList.classList.remove("displayNone");
    softSkillsList.classList.add("displayNone");

    softSkill.classList.remove("softTab");
    softSkill.classList.add("techNTab","textBlue");

    techSkill.classList.remove("textBlue","softNTab");
    techSkill.classList.add("techTab");
});
//****************************************************************************
