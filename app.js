const url=`https://api.github.com/users/`;
const main=document.querySelector("#main");
const searchBox=document.querySelector("#search");
const form=document.querySelector("form")

const getUser=async(username)=>{
    const response=await fetch(url+username)
    const data=await response.json()
    console.log(data);
    const card=`
    <div id="card" class="flex gap-12">
                <div class="w-[35%]">
                    <img src="${data.avatar_url}" class="rounded-full object-cover size-30 w-fit" alt="picture...">
                </div>
                <div id="user_info" class="flex gap-1 p-3 flex-wrap flex-col text-white">
                    <h2 class="text-2xl font-bold">${data.name}</h2>
                    <p>${data.bio}</p>

                    <ul class="info flex gap-6">
                        <li><span class="mr-1">${data.followers}</span><strong>Followers</strong></li>
                        <li><span class="mr-1">${data.following}</span><strong>Following</strong></li>
                        <li><span class="mr-1">${data.public_repos}</span><strong>Repos</strong></li>
                    </ul>

                    <div id="repos" class="mt-2 flex-wrap flex gap-2.5">
                    
                    </div>
                </div>
            </div>
    `
    main.innerHTML=card;
    getrepos(username);
}


const getrepos=async(username)=>{
    let count=1
    const repos=document.querySelector("#repos")
    const response=await fetch(url+username+'/repos')
    const data=await response.json()
    data.forEach((item)=>{
        const ele=document.createElement('a')
        ele.classList.add("repo","bg-white","text-blue-900","font-bold","rounded-2xl","pl-1","pb-1","pr-2","pl-2")
        ele.href=item.html_url
        ele.innerText=item.name
        ele.target="_blank"
        repos.appendChild(ele)
        count++
    })
}

form.addEventListener(
    "submit",(event)=>{
        if(searchBox.value!=''){
            getUser(searchBox.value);
            event.preventDefault();
            searchBox.value=''
        }
        else{
            main.innerHTML=`<h2 class="text-2xl font-bold text-white">Enter Username...</h2>`
             event.preventDefault();
        }
        // return false;

    }
    
)

// {/* <a class="repo bg-white text-blue-900 pt-0.5 pb-0.5 pl-1 pr-1 font-bold rounded-2xl" href="#" target="_blank">Repo 1</a>
//                     <a class="repo bg-white text-blue-900 pt-0.5 pb-0.5 pl-1 pr-1 font-bold rounded-2xl" href="#" target="_blank">Repo 2</a>
//                     <a class="repo bg-white text-blue-900 pt-0.5 pb-0.5 pl-1 pr-1 font-bold rounded-2xl" href="#" target="_blank">Repo 3</a> */}