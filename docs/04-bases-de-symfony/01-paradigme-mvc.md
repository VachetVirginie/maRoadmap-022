---
sidebar_position: 2
---

# Le paradigme MVC 
---------------


> Modèle-Vue-Contrôlleur

Symfony et MVC

Symfony repose sur un modèle MVC (Model - View - Controller ou Modèle - Vue - Contrôleur), et le contrôleur joue un rôle central dans cette architecture. Il est chargé de recevoir la requête du client, charger les modèles nécessaires depuis une source de données puis construire la vue et la retourner à l'utilisateur.

On dit qu'une image vaut mieux que milles mots, alors voici:

https://imgur.com/jiXXwXg.jpg
Architecture MVC

Voici un peu une image de l'architecture MVC, le contrôleur reçoit une requête HTTP, récupère les données nécessaires et retourne une réponse soit en HTML, JSON ou autres.

C'est donc sur cet architecture que repose Symfony, avec une couche supérieur. Avec Symfony, toutes les requêtes passent par un premier contrôleur, le Front Controller (Contrôleur Frontal). Le Front Controller de Symfony agit un peu comme un aiguilleur, toutes les requêtes qui arrivent sur notre application passent par ce contrôleur, le contrôleur frontal va ensuite appeler le contrôleur qui va traiter la requête reçu.

Une image vaut toujours mieux que milles mots, alors regarde un peu l'image ci-dessous:

https://imgur.com/S09yPJk.jpg
Le contrôleur frontal de Symfony

Concrètement, qu'est-ce qu'il se passe?

Prenons l'exemple de cette page sur laquelle tu te trouves, ici même, en train de lire ce tutoriel, lorsque tu as rentrer l'URL de cet article dans ton navigateur (Chrome, Firefox, ...), qui représente le client, une requête HTTP a été envoyer par ton navigateur, puis, par la magie d'internet et du DNS, cette requête a atteint le serveur de Kaherecode, de là, le contrôleur frontal vérifie la route qui compose l'URL, /tutorial dans ce cas, il va donc vérifier qu'il y a un contrôleur associer à cette route, si c'est le cas, il appelle donc ce contrôleur qui va charger le modèle nécessaire (le tutoriel que tu es en train de lire), puis construire la vue avec le contenu du tutoriel. Une fois la vue construite, le contrôleur va retourner la vue (une page HTML dans notre cas) au contrôleur frontal, et enfin le contrôleur frontal va retourner la page HTML à ton navigateur qui va te l'afficher pour que tu puisses lire ce tutoriel. Mais qu'est-ce qu'il se passe si aucun contrôleur n'est associé à la route? Tu as alors une erreur 404, que tu dois connaître qui indique que l'URL que tu cherches n'existe pas sur ce serveur.

Voici un peu comment fonctionne le contrôleur frontal de Symfony. Le contrôleur frontal c'est le fichier public/index.php , c'est donc ce fichier le point d'entrée de notre application Symfony.

## Ressources

* [Texte - Structurer votre code avec le pattern MVC](https://apprendre-la-programmation.net/structurer-code-pattern-mvc/)

* [Texte - PHP Orienté Objet - Le MVC Épisode 1](https://nouvelle-techno.fr/articles/live-coding-php-oriente-objet-le-mvc)

* [Texte - PHP Orienté Objet - Le MVC Épisode 2](https://nouvelle-techno.fr/articles/live-coding-php-oriente-objet-le-mvc-episode-2)

* [Vidéo - L'architecture MVC](https://www.youtube.com/watch?v=6v8LGDQL9Vs)

* [Vidéo - Créer un MVC](https://www.youtube.com/watch?v=a3NZtp3FJEE)