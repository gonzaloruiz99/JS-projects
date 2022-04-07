

const data = [
    {
        id: "project_1",
        name: "project 1",
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique eius ea sequi distinctio autem repellat, libero
                    esse
                    nam. Quam nesciunt nobis iure cupiditate neque hic magnam optio assumenda unde sequi. Rem cumque iure cum
                    reprehenderit
                    repellendus, autem voluptates maxime ipsa numquam libero nobis saepe laudantium amet praesentium voluptatibus, fuga
                    eveniet.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit quod, molestiae voluptates commodi debitis
                    saepe
                    hic, aut magnam accusantium nostrum error ratione eum vero accusamus autem modi labore doloremque explicabo ut
                    perspiciatis nulla molestias sequi eligendi tempore libero. Dolore iste vitae illum sequi neque quas, dolorem dolor
                    officiis voluptatum quae voluptatibus tenetur molestias soluta blanditiis amet debitis incidunt eaque ratione facere
                    repudiandae cupiditate aspernatur, velit ea itaque. Optio aut harum ad modi dolore doloribus tenetur laboriosam
                    aspernatur minima itaque velit quia, illo sapiente unde, eum autem expedita facilis aliquam, dolorum dicta fuga
                    totam
                    sed pariatur iste! Inventore laudantium qui nostrum, perspiciatis quod! Molestias asperiores facilis explicabo
                    necessitatibus dicta perferendis, esse, quisquam autem corporis ab doloremque nisi voluptas quidem, modi sequi
                    aperiam,
                    illum reiciendis delectus nostrum architecto eligendi sint deleniti voluptate! Magni quia harum eligendi laudantium
                    fuga
                    aspernatur veniam sunt impedit, vitae sit praesentium quam porro dolorem in eveniet iusto. Dicta tempora quo itaque
                    minima expedita accusamus ex perferendis repellat totam! Fugit rerum nihil distinctio ducimus delectus, accusamus
                    enim
                    eos eum nulla fugiat aliquam blanditiis minus omnis maiores, quia numquam placeat. Molestias cupiditate deleniti
                    porro
                    praesentium, aliquam blanditiis maxime iste necessitatibus provident optio ipsum, beatae, libero nostrum, maiores!
                    Temporibus, reiciendis, quibusdam.`,
        image: "url(./img/photo-1.jpg)",
        type: "A",
    },
    {
        id: "project_2",
        name: "project 2",
        text: "",
        image: "",
        type: "A",
    },
    {
        id: "project_3",
        name: "project 3",
        text: "",
        image: "",
        type: "A",
    },
    {
        id: "project_4",
        name: "project 4",
        text: "",
        image: "",
        type: "B",
    },
    {
        id: "project_5",
        name: "project 5",
        text: "",
        image: "",
        type: "B",
    },
    {
        id: "project_6",
        name: "project 6",
        text: "",
        image: "",
        type: "B",
    },
    {
        id: "project_7",
        name: "project 7",
        text: "",
        image: "",
        type: "C",
    },
    {
        id: "project_8",
        name: "project 8",
        text: "",
        image: "",
        type: "C",
    },
    {
        id: "project_9",
        name: "project 9",
        text: "",
        image: "",
        type: "C",
    },
]





const projectImgs  = document.querySelectorAll(".grid-box");



/*
Projects Listeners:
When opended:
. It moves it to the top with an absolute position
. + Small animation with translateY

When close, it removes all the new properties dynamically added

*/

projectImgs.forEach(function(projectImg){
    const project = projectImg.querySelector(".project");
    const closeBtn = projectImg.querySelector(".close-btn");

    project.addEventListener("click", function(){
        projectImg.classList.add("show-text");
        project.style.height = "40vh";
        project.style.transform = "translateY(-25vh)";
        
        project.parentElement.style.zIndex = "10";
        project.parentElement.style.height = "100%";
        project.parentElement.style.position = "absolute";
        project.parentElement.style.top = "25vh";
        

    })

    closeBtn.addEventListener("click", function(){
        projectImg.classList.remove("show-text");
        project.style.height = "25vh";
        project.style.transform = "translateY(0)";

        project.parentElement.style.zIndex = "1";
        project.parentElement.style.position = "static";
        project.parentElement.style.height = "auto";

    })

})






// _________________ FILTERS ______________________

const projectOne  = document.querySelector(".project1");
const projectTwo  = document.querySelector(".project2");
const projectThree  = document.querySelector(".project3");
const filters  = document.querySelectorAll(".filter");


const mainContainer = document.querySelector(".grid-container");

filters.forEach(function(filter){
    filter.addEventListener("click", function(){

        switch(filter.value){

            case "1":
                projectOne.style.backgroundImage = "url(./img/photo-1.jpg)";
                projectTwo.style.backgroundImage = "url(./img/photo-4.jpg)";
                projectThree.style.backgroundImage = "url(./img/photo-7.jpg)";
                 break;
            case "2":
                projectOne.style.backgroundImage = "url(./img/photo-2.jpg)";
                projectTwo.style.backgroundImage = "url(./img/photo-5.jpg)";
                projectThree.style.backgroundImage = "url(./img/photo-8.jpg)";

                break;
            case "3":
                projectOne.style.backgroundImage = "url(./img/photo-3.jpg)";
                projectTwo.style.backgroundImage = "url(./img/photo-6.jpg)";
                projectThree.style.backgroundImage = "url(./img/photo-9.jpg)";
                 break;
            default: break;

        }


    })
})



