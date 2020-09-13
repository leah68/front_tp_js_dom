// En utilisant l'API Fetch, récupérez sous la forme d'un objet
// JSON la table d'utilisateurs disponible à l'adresse suivante :
// https://jsonplaceholder.typicode.com/users
// Afficher la taille en octets de la réponse
// Afficher la réponse dans la console
// Ajoutez au DOM une table affichant pour tous les utilisateurs
// les valeurs des propriétés suivantes : id, nom, nom de l'entreprise
// La table sera créée comme nouvel enfant de la div d'id workspace
// votre code

const fetchUsers = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!res.ok) {
            throw new Error(res.status);
        }
        const data = await res.json();
        console.log(data);

        var table = document.createElement('table');
        workspace.insertBefore(table, p)
        table.bgColor = "#0000";
        table.border = "#fff";
        table.style.borderCollapse = "collapse"

        var th = document.createElement('th');
        th.innerHTML = "id";
        table.appendChild(th);

        var thNom = document.createElement('th');
        thNom.innerHTML = "Nom";
        table.appendChild(thNom);

        var thEntreprise = document.createElement('th');
        thEntreprise.innerHTML = "Entreprise";
        table.appendChild(thEntreprise);

            for(var i = 0; i < data.length; i++){
                var tr2 = document.createElement('tr');
                table.appendChild(tr2);

                var tdid = document.createElement('td');
                tr2.appendChild(tdid);
                tdid.innerHTML = data[i].id;

                var td = document.createElement('td');
                tr2.appendChild(td);
                td.innerHTML = data[i].name;

                var tdnentreprise = document.createElement('td');
                tr2.appendChild(tdnentreprise);
                tdnentreprise.innerHTML = data[i].company.name;
            }
    } catch (error) {
        console.log(error);
    }
}
 
fetchUsers();

