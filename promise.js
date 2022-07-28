const blogs = [
     { title: 'Cinematic', body: 'Marvel Cinematic Universe announced all projects of phase 5 which contains thanos level threats like secret wars and multiverse saga.' },
     { title: 'Sports', body: 'India won the ODI series against West Indies with 3-0 lead as Subhman  Gill becoming player of the series.' }
];

function getBlog() {
     setTimeout(() => {
          let output = '';
          blogs.forEach((blog, index) => {
               output += `<h3> ${blog.title}:</h3><p style= "font-style:italic;"> ${blog.body} </p>`;

          });
          document.body.innerHTML = output;
          document.body.style.fontFamily = 'Arial,Helvetica,sans-serif';
          document.body.style.fontSize = '25px';
          document.body.style.color = '#c39';
          document.body.style.background = '#00ffdd';
     }, 1000);
}

function createBlog(blog) {
     return new Promise((resolve, reject) => {
          setTimeout(() => {
               blogs.push(blog);

               const error = false;
               //const error = true;

               if (!error) {
                    resolve();
               } else {
                    reject('Error : Something went wrong..');
               }
          }, 2000);
     })

}

createBlog({ title: 'Politics', body: 'I dont take intrest in this bloody politics. So I dont knoe anything about it.' })
     .then(getBlog);
//.catch(err => console.log(err));


// promise all
const promise1 = Promise.resolve('Ramnath ');
const promise2 = 10;
const promise3 = new Promise((resolve,reject)=>
setTimeout(resolve,2000,'Mandal')
);
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json());

Promise.all([promise1,promise2,promise3,promise4]).then(values=>console.log(values));