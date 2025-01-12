let compteurMessage = 0; // Compteur pour alterner les messages

function Deplacer() {
    let texte = document.getElementById("clavier").value;
    
    if (texte.trim() !== "") { // Check du texte remplis
        // nouveau div pour le message
        let messageDiv = document.createElement("div");
        messageDiv.classList.add("texte");
        
        // Application du compteur
        if (compteurMessage % 2 === 0) {
            messageDiv.classList.add("gauche");
        } else {
            messageDiv.classList.add("droite");
        }
        
        messageDiv.innerHTML = texte;
        
        // Ajout du nouveau message dans .affichage
        document.querySelector(".affichage").appendChild(messageDiv);
        
        document.getElementById("clavier").value = "";
        
        // Incrémentation
        compteurMessage++;
    }
}

document.querySelector("button").addEventListener("click", Deplacer);
