const sidebar = document.querySelector("#sidebar");
const buttonToggler = document.querySelector(".navigation__toggler");
const buttonCloser = document.querySelector(".navigation__closer");
const ElementProjactComplate = document.querySelector('#value-projact-complate')
const ProjactComplate = document.querySelector('#ValueProjact')

const containerValue = {
  projectComplate: 480,
  yearExperience : "70+"
}

const navigattionMenu = document.querySelector(".navigation__menus")

const navigattionMenus =[
  {
  title: "Work",
  link : "/#"
  }, 
  {
  title: "About",
  link : "/#"
  },
  {
  title: "Contact",
  link : "/#"
  }, 
  {
  title: "Sevice",
  link : "/#"
  }];



console.log(navigattionMenus[1].projectComplate);
const a = navigattionMenu.map((navigation) => {
  return navigation
})

console.log("");
console.log(containerValue);


console.log("ini value nya", ElementProjactComplate)
/**
 * Untuk menampilkan sidebar ketika diklik
 * 
 * Cara baca: 
 * Button toggler ku berikan event ketika di klik, maka di element dengan id sidebar (Tag Aside nya)
 * tambahkan class tambahan yaitu "show" dan buang class "hide"
 *  */
buttonToggler.addEventListener("click", () => {
  sidebar.classList.toggle("show");
  sidebar.classList.remove("hide");
});

/**
 * Untuk menutup sidebar ketika diklik
 * 
 * Cara baca: 
 * Button closer ku berikan event ketika di klik, maka di element dengan id sidebar (Tag Aside nya)
 * hapus class tambahan yaitu "hide" dan tambah class "show"
 *  */
buttonCloser.addEventListener("click", () => {
  sidebar.classList.remove("show");
  sidebar.classList.toggle("hide");
});

ElementProjactComplate.append(containerValue.projectComplate)
ProjactComplate.append(containerValue.yearExperience)