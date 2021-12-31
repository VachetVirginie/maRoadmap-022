---
sidebar_position: 3
---

Revisions: Cours udemy: Framework Symfony : de 0 à pro  section 4.

# Les contrôleurs
---------------

En Symfony, le contrôleur est une fonction PHP qui est relié à une route. Une route sert à faire le lien entre l'URL de la requête et le contrôleur. Les contrôleurs sont définis dans le dossier `src/Controller`, tu peux donc toi même créer une classe PHP dans ce dossier et y définir tes contrôleurs, ou tu peux me laisser te montrer une méthode ~~paresseuse~~ simple pour le faire. Pour cela, il faut simplement exécuter la commande:

```
$ symfony console make:controller CoreController
```

Je choisis d'appeler cette première classe `CoreController`, le choix du nom de la classe est personnel, mais il faut que le nom est le suffixe `Controller`. Et il faut essayer d'organiser les contrôleurs dans différents classes, ce que j'aime faire par exemple, c'est de définir une classe `CoreController` qui va contenir les contrôleurs de base de mon application comme la page d'accueil, une page contact, ... ensuite avoir une classe `EventController` par exemple, qui va contenir les contrôleurs sur la gestion des évènements et ainsi de suite. Ceci est une organisation personnel, j'ai commencé par organiser mes contrôleurs en bundles avec Symfony 3, puis à mettre tout mes contrôleurs dans une seule classe avant d'en venir à cette organisation, qui n'est pas forcément la meilleure, mais ça je le saurais avec la pratique et le temps. Tu peux donc utiliser ta propre logique pour organiser tes contrôleurs. Il faut juste avoir une organisation qui va te faciliter la maintenance de ton application plus tard.

Pour créer la classe `CoreController`, nous allons exécuter la commande:

```
$ symfony console make:controller CoreController
```

![https://imgur.com/3ls2TBh.jpg](https://imgur.com/3ls2TBh.jpg)

Et comme par magie (alors que c'est juste Symfony), la console nous indique que la commande a créer les fichiers `src/Controller/CoreController.php` et `templates/core/index.html.twig`.

Si tu ouvres le fichier `src/Controller/CoreController.php`:

```
<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CoreController extends AbstractController
{
    /**
     * @Route("/core", name="core")
     */
    public function index(): Response
    {
        return $this->render('core/index.html.twig', [
            'controller_name' => 'CoreController',
        ]);
    }
}
```

La classe `CoreController` hérite de la classe `AbstractController` qui est défini dans le namespace `Symfony\Bundle\FrameworkBundle\Controller`, ensuite nous avons une méthode `index()` qui retourne un objet `Response` qui est aussi défini par Symfony. La fonction `index()` est décoré d'une annotation `@Route("/core", name="core")`, cette annotation permet de définir une route `/core` qui est rattaché au contrôleur `index`, si tu ouvres ton navigateur et que tu te rends sur l'URL <https://127.0.0.1:8000/core>, tu vas avoir une page comme ci-dessous:

![https://imgur.com/ZbxPwQP.jpg](https://imgur.com/ZbxPwQP.jpg)

Ça commence à bien le faire la, on continue encore un peu et tu seras un développeur Symfony confirmé.

Ce qu'il s'est passé, c'est que le contrôleur frontal (tu t'en rappelles non?) à reçu la requête, il a sorti la route `/core` et à regarder le contrôleur rattaché à cette route, la méthode `index()` dans la classe `CoreController`, cette fonction a retourner un fichier `index.html.twig` dont nous allons parler dans la prochaine partie et le contrôleur frontal à renvoyer ce fichier au navigateur, simple et efficace.

Dans notre cas, nous voulons que quand l'utilisateur arrive à la racine de notre site, le contrôleur `index` soit appelé et que celui-ci soit la page d'accueil, il faut donc modifier la définition de la route comme ceci:

```
<?php
// src/Controller/CoreController.php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CoreController extends AbstractController
{
    /**
     * @Route("/", name="homepage")
     */
    public function homepage(): Response
    {
        return $this->render('core/index.html.twig', [
            'controller_name' => 'CoreController',
        ]);
    }
}
```

Si tu retournes sur le lien <https://127.0.0.1:8000/core>, tu vas avoir une erreur `404` qui dit que la route `GET /core` n'existe pas, et oui tu l'as supprimer, il faut maintenant aller sur le lien [https://127.0.0.1:8000](https://127.0.0.1:8000/) pour voir la page.

Actuellement le contrôleur affiche une vue et c'est plutôt cool, mais nous parlerons des vues dans la prochaine partie, nous allons donc pour l'instant retourner un objet `Response`:

```
<?php
// src/Controller/CoreController.php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CoreController extends AbstractController
{
    /**
     * @Route("/", name="homepage")
     */
    public function homepage(): Response
    {
        return new Response("Hello toi dev Symfony, Bienvenue sur Kaherecode!");
    }
}
```

Maintenant le contrôleur `homepage` retourne un objet `Response` qui contient le texte **"Hello toi dev Symfony, bienvenue sur Kaherecode!"**, on regarde ce qu'on a dans le navigateur:

![https://imgur.com/n2CBf8n.jpg](https://imgur.com/n2CBf8n.jpg)

Et c'est bien ça, on a notre premier contrôleur, yesssss!

Bon j'avoue qu'on a encore du chemin à faire, mais on peut aussi retourner du HTML pour que le texte soit un peu plus lisible:

```
<?php
// src/Controller/CoreController.php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CoreController extends AbstractController
{
    /**
     * @Route("/", name="homepage")
     */
    public function homepage(): Response
    {
        return new Response("
            <h1>Hello toi dev Symfony,</h1>
            <h2>Bienvenue sur Kaherecode!</h2>
        ");
    }
}
```

![https://imgur.com/RXKBSHN.jpg](https://imgur.com/RXKBSHN.jpg)

Et on a maintenant des balises HTML. Sois fier de toi, on a une page web qui s'affiche, nous allons l'améliorer plus tard.
