export function getLocalStorageData() {
    return JSON.parse(localStorage.getItem("EmployeeData"));
 }

 export function setLocalStorageData(contactsList){
    localStorage.setItem("EmployeeData",JSON.stringify(contactsList));
 }
    
 export function deleteObject(email){
         let contacts = getLocalStorageData();
         return contacts.filter(contact => contact.email !== email);
       }
 

 export function updateObject(employee, index) {
   let contact = getLocalStorageData();
     contact[index] = { ...contact[index], ...employee }; 
     setLocalStorageData(contact);
 }
 



 