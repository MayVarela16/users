document.addEventListener("DOMContentLoaded", async function () {
    try {
      const listaUsuarios = document.getElementById("listaUsuarios");
      const apiUrl = "https://jsonplaceholder.typicode.com/users";
  
      const response = await fetch(apiUrl);
      const users = await response.json();
  
      users.forEach((user) => {
        user.age = Math.floor(Math.random() * 30) + 18;
  
        const userDetails = {
          name: user.name,
          age: user.age,
          username: user.username,
          img: `./assets/img/${user.id}.jpeg`, 
          phone: user.phone,
          email: user.email,
          company: user.company.name,
          address: `${user.address.street}, ${user.address.suite}, ${user.address.city}`
        };
  
    
        const listItem = document.createElement("li");

  
        listItem.innerHTML = `
        <img src="${userDetails.img}" alt="Imagen de ${userDetails.name}">
          <strong>${userDetails.name}</strong>
          <p><strong>Username:</strong> ${userDetails.username}</p>
          <p><strong>Age:</strong> ${userDetails.age}</p>
          <p><strong>Phone:</strong> ${userDetails.phone}</p>
          <p><strong>Email:</strong> ${userDetails.email}</p>
          <p><strong>Company:</strong> ${userDetails.company}</p>
          <p><strong>Address:</strong> ${userDetails.address}</p>
        `;
  
    
        listaUsuarios.appendChild(listItem);
      });
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  });