document.getElementById("resumeform")?.addEventListener("submit",function(event){
    event.preventDefault();

    
    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement
    
    
    

    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const educationElement = document.getElementById("education") as HTMLInputElement;
    const experienceElement = document.getElementById("experience") as HTMLInputElement;
    const skillsElement = document.getElementById("skills") as HTMLInputElement;

  
   if (profilePictureInput && nameElement && emailElement && educationElement && experienceElement && skillsElement ) {

    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const education = educationElement.value;
    const experience = experienceElement.value;
    const skills = skillsElement.value; 
   
    
    const profilePictureFile = profilePictureInput.files?.[0]
    const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';




 
    const resumeOutput = `
  <h2>Resume</h2>
  ${profilePictureURL ? `<img src= ${profilePictureURL} alt="profile Picture" class="profilePicture">` : "" }
  <p><strong>Name:</strong>${name} </p>
  <p><strong>email:</strong>${email} </p>
  <p><strong>phone:</strong>${phone} </p>


  <h3>Education</h3>
  <P>${education}</P>

  <h3>Experience</h3>
  <P>${experience}</P>

  <h3>Skills</h3>
  <P>${skills}</P>
  `;

   const resumeOutputElement = document.getElementById("resumeOutput")
   if(resumeOutputElement){
    resumeOutputElement.innerHTML = resumeOutput;
   }else{
    console.error("resume Output Element are missing");
    }
}else{
    console.log("one or more output elements are missing");
    
}
})


