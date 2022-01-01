---
sidebar_position: 3
---

# Comment fonctionnent les navigateurs
---------------

![Comment fonctionnent les navigateurs](https://cdn-media-1.freecodecamp.org/images/1*LPukLPd6d4l3YH8kCLDz5w.jpeg)

par Alex Nadalin: https://www.freecodecamp.org/news/web-application-security-understanding-the-browser-5305ed2f1dac/

#### Une introduction à la sécurité des applications Web

Ouvrons cette série sur la sécurité des applications Web avec une explication de ce que font les navigateurs et comment ils le font. Étant donné que la plupart de vos clients interagiront avec votre application Web via un navigateur, il est impératif de comprendre les bases de ces merveilleux programmes.

**Le navigateur est un moteur de rendu** . Son travail consiste à télécharger une page Web et à la rendre compréhensible par un être humain.

Même s'il s'agit d'une simplification presque criminelle, c'est tout ce que nous devons savoir pour le moment.

-   L'utilisateur saisit une adresse dans la barre du navigateur.
-   Le navigateur télécharge le « document » à cette URL et le rend.

![](https://cdn-media-1.freecodecamp.org/images/36UVnQqt7Pi8y5VreXig8MFoon65civsswLS)

Vous avez peut-être l'habitude de travailler avec l'un des navigateurs les plus populaires tels que Chrome, Firefox, Edge ou Safari, mais cela ne veut pas dire qu'il n'existe pas différents navigateurs.

[lynx](https://translate.google.com/website?sl=auto&tl=fr&u=https://lynx.browser.org/) , par exemple, est un navigateur texte léger qui fonctionne à partir de votre ligne de commande. Au cœur de lynx se trouvent exactement les mêmes principes que vous trouveriez dans n'importe quel autre navigateur « grand public ». Un utilisateur entre une adresse Web (URL), le navigateur récupère le document et le restitue --- la seule différence étant le fait que lynx n'utilise pas de moteur de rendu visuel mais plutôt une interface textuelle, ce qui donne l'apparence de sites Web comme Google. :

![](https://cdn-media-1.freecodecamp.org/images/22-zfqmwHAaTX9h7UPlxalWVXn4u6Amd9agj)

Nous comprenons globalement ce que fait un navigateur, mais examinons de plus près les étapes que ces applications ingénieuses effectuent pour nous.

### A quoi sert un navigateur ?

Pour faire court, le travail d'un navigateur consiste principalement à :

-   Résolution DNS
-   échange HTTP
-   Le rendu
-   Rincer et répéter

#### **Résolution DNS**

Ce processus garantit qu'une fois que l'utilisateur a saisi une URL, le navigateur sait à quel serveur il doit se connecter. Le navigateur contacte un serveur DNS pour trouver qui se `google.com`traduit par `216.58.207.110`, une adresse IP à laquelle le navigateur peut se connecter.

#### Échange HTTP

Une fois que le navigateur a identifié quel serveur va servir notre requête, il initiera une connexion TCP avec lui et commencera l' **échange HTTP** . Ce n'est rien d'autre qu'un moyen pour le navigateur de communiquer avec le serveur ce dont il a besoin et pour le serveur de répondre.

HTTP est simplement le nom du protocole le plus populaire pour communiquer sur le Web, et les navigateurs parlent principalement via HTTP lorsqu'ils communiquent avec les serveurs. Un échange HTTP implique que le client (notre navigateur) envoie une **requête** et que le serveur **réponde** avec une **réponse** .

Par exemple, une fois que le navigateur s'est connecté avec succès au serveur derrière `google.com`, il enverra une requête qui ressemble à ce qui suit :

```
GET / HTTP/1.1Host: google.comAccept: */*
```

Décomposons la demande, ligne par ligne :

-   `GET / HTTP/1.1`: avec cette première ligne, le navigateur demande au serveur de récupérer le document à l'emplacement `/`, ajoutant que le reste de la requête suivra le protocole HTTP/1.1 (il pourrait aussi utiliser `1.0`ou `2`)
-   `Host: google.com`: c'est **le seul en-tête HTTP obligatoire dans HTTP/1.1** . Étant donné que le serveur peut desservir plusieurs domaines ( `google.com`, `google.co.uk`, etc.), le client mentionne ici que la demande concernait cet hôte spécifique
-   `Accept: */*`: un en-tête facultatif, où le navigateur indique au serveur qu'il acceptera tout type de réponse en retour. Le serveur peut avoir une ressource disponible aux formats JSON, XML ou HTML, afin qu'il puisse choisir le format qu'il préfère

Une fois que le navigateur, qui agit en tant que **client** , a terminé sa requête, c'est au tour du serveur de répondre. Voici à quoi ressemble une réponse :

```
HTTP/1.1 200 OKCache-Control: private, max-age=0Content-Type: text/html; charset=ISO-8859-1Server: gwsX-XSS-Protection: 1; mode=blockX-Frame-Options: SAMEORIGINSet-Cookie: NID=1234; expires=Fri, 18-Jan-2019 18:25:04 GMT; path=/; domain=.google.com; HttpOnly
```

```
<!doctype html><html">......</html>
```

Whoa, ça fait beaucoup d'informations à digérer. Le serveur nous fait savoir que la requête a réussi ( `200 OK`) et ajoute quelques en-têtes à la **réponse** , par exemple, il annonce quel serveur a traité notre requête ( `Server: gws`), quelle est la `X-XSS-Protection`politique de cette réponse et ainsi de suite.

Pour le moment, vous n'avez pas besoin de comprendre chaque ligne de la réponse. Nous couvrirons le protocole HTTP, ses en-têtes, etc. plus tard dans cette série.

Pour l'instant, il suffit de comprendre que le client et le serveur échangent des informations et qu'ils le font via HTTP.

#### Le rendu

Dernier point, mais non le moindre, le processus de **rendu** . À quel point un navigateur serait-il bon si la seule chose qu'il montrait à l'utilisateur était une liste de personnages amusants ?

```
<!doctype html><html">......</html>
```

Dans le **corps** de la réponse, le serveur inclut la représentation de la réponse selon l'en- `Content-Type`tête. Dans notre cas, le type de contenu a été défini sur `text/html`, nous attendons donc un balisage HTML dans la réponse, ce qui est exactement ce que nous trouvons dans le corps.

C'est là qu'un navigateur brille vraiment. Il analyse le HTML, charge les ressources supplémentaires incluses dans le balisage (par exemple, il peut y avoir des fichiers JavaScript ou des documents CSS à récupérer) et les présente à l'utilisateur dès que possible.

Une fois de plus, le résultat final est quelque chose que le Joe moyen peut comprendre.

![](https://cdn-media-1.freecodecamp.org/images/PsZC9DUwnoX9m5jPVkT8lWMr5lZ1GliyEjKS)

Pour une version plus détaillée de ce qui se passe réellement lorsque nous appuyons sur Entrée dans la barre d'adresse d'un navigateur, je suggérerais de lire « [Que se passe-t-il quand...](https://translate.google.com/website?sl=auto&tl=fr&u=https://github.com/alex/what-happens-when) », une tentative très élaborée pour expliquer les mécanismes derrière le processus.

Puisqu'il s'agit d'une série centrée sur la sécurité, je vais laisser tomber un indice sur ce que nous venons d'apprendre : les **attaquants gagnent facilement leur vie grâce aux vulnérabilités de la partie échange et rendu HTTP** . Les vulnérabilités et les utilisateurs malveillants se cachent également ailleurs, mais une meilleure approche de la sécurité à ces niveaux vous permet déjà de faire des progrès dans l'amélioration de votre posture de sécurité.

#### Vendeurs

Les 4 navigateurs les plus populaires appartiennent à différents fournisseurs :

-   Chrome par Google
-   Firefox par Mozilla
-   Safari par Apple
-   Edge par Microsoft

En plus de se battre pour accroître leur pénétration du marché, les fournisseurs s'engagent également entre eux afin d'améliorer **les normes Web** , qui sont une sorte d'« exigences minimales » pour les navigateurs.

Le [W3C](https://translate.google.com/website?sl=auto&tl=fr&u=https://www.w3.org/) est l'organisme derrière le développement des normes, mais il n'est pas rare que les navigateurs développent leurs propres fonctionnalités qui finissent par en faire des normes Web, et la sécurité ne fait pas exception à cela.

Chrome 51, par exemple, a [introduit les cookies SameSite](https://translate.google.com/website?sl=auto&tl=fr&u=https://www.chromestatus.com/feature/4672634709082112) , une fonctionnalité qui permettrait aux applications Web de se débarrasser d'un type particulier de vulnérabilité connu sous le nom de CSRF (nous en parlerons plus tard). D'autres fournisseurs ont décidé que c'était une bonne idée et ont emboîté le pas, faisant de SameSite une norme Web : à l'heure actuelle, [Safari est le seul navigateur majeur sans prise en charge des cookies SameSite](https://translate.google.com/website?sl=auto&tl=fr&u=https://caniuse.com/%23search%3Dsamesite) .

![](https://cdn-media-1.freecodecamp.org/images/rAkCeGgFkTBqnbxYa7c0qu6m2TNjKNK847tw)

Cela nous dit 2 choses :

-   Safari ne semble pas assez se soucier de la sécurité de ses utilisateurs (je plaisante : les cookies SameSite seront disponibles dans Safari 12, qui ont peut-être déjà été publiés au moment où vous lisez cet article)
-   **patcher une vulnérabilité sur un navigateur ne signifie pas que tous vos utilisateurs sont en sécurité**

Le premier point est un coup sur Safari (comme je l'ai mentionné, je plaisante !), tandis que le deuxième point est vraiment important. Lors du développement d'applications Web, nous ne devons pas seulement nous assurer qu'elles ont la même apparence sur différents navigateurs, mais aussi qu'elles garantissent que nos utilisateurs sont protégés de la même manière sur toutes les plateformes.

**Votre stratégie en matière de sécurité Web doit varier en fonction de ce que le fournisseur d'un navigateur nous permet de faire** . De nos jours, la plupart des navigateurs prennent en charge le même ensemble de fonctionnalités et s'écartent rarement de leur feuille de route commune, mais des cas comme celui ci-dessus se produisent toujours, et c'est quelque chose que nous devons prendre en compte lors de la définition de notre stratégie de sécurité.

Dans notre cas, si nous décidons d'atténuer les attaques CSRF uniquement via les cookies SameSite, nous devons être conscients que nous mettons nos utilisateurs de Safari en danger. Et nos utilisateurs devraient le savoir aussi.

Enfin, rappelez-vous que vous pouvez décider de prendre en charge ou non une version de navigateur : la prise en charge de chaque version de navigateur ne serait pas pratique (pensez à Internet Explorer 6). S'assurer que les dernières versions des principaux navigateurs sont prises en charge, cependant, est généralement une bonne décision. Si vous ne prévoyez pas d'offrir une protection sur une plate-forme particulière, il est généralement conseillé d'en informer vos utilisateurs.

> ***Conseil de pro*** *: Vous ne devez jamais encourager vos utilisateurs à utiliser des navigateurs obsolètes, ni les soutenir activement. Même si vous avez pris toutes les précautions nécessaires, d'autres développeurs Web peuvent ne pas l'avoir fait. Encouragez les utilisateurs à utiliser la dernière version prise en charge de l'un des principaux navigateurs.*

#### Fournisseur ou bug standard ?

Le fait que l'utilisateur moyen accède à notre application via un client tiers (le navigateur) ajoute un autre niveau d'indirection vers une expérience de navigation claire et sécurisée : le navigateur lui-même peut présenter une faille de sécurité.

Les fournisseurs offrent généralement des récompenses (aka *bug bounties* ) aux chercheurs en sécurité qui peuvent trouver une vulnérabilité sur le navigateur lui-même. Ces bogues ne sont pas liés à votre implémentation, mais plutôt à la façon dont le navigateur gère lui-même la sécurité.

Le [programme de récompense Chrome](https://translate.google.com/website?sl=auto&tl=fr&u=https://www.google.com/about/appsecurity/chrome-rewards/) , par exemple, permet aux ingénieurs en sécurité de contacter l'équipe de sécurité Chrome pour signaler les vulnérabilités qu'ils ont trouvées. Si ces vulnérabilités sont confirmées, un correctif est publié, un avis de sécurité est généralement rendu public et le chercheur reçoit une récompense (généralement financière) du programme.

Des entreprises comme Google investissent un capital relativement important dans leurs programmes Bug Bounty, car cela leur permet d'attirer des chercheurs en leur promettant un avantage financier en cas de problème avec l'application.

Dans un programme Bug Bounty, tout le monde y gagne : le fournisseur parvient à améliorer la sécurité de son logiciel et les chercheurs sont payés pour leurs découvertes. Nous discuterons de ces programmes plus tard, car je pense que les initiatives Bug Bounty méritent leur propre section dans le paysage de la sécurité.

> *Jake Archibald est un défenseur des développeurs chez Google qui a récemment découvert une vulnérabilité affectant plusieurs navigateurs. Il a documenté ses efforts, la façon dont il a approché les différents fournisseurs et leurs réactions dans un [article de blog](https://translate.google.com/website?sl=auto&tl=fr&u=https://jakearchibald.com/2018/i-discovered-a-browser-bug/) intéressant que je vous recommande de lire.*

### Un navigateur pour les développeurs

À présent, nous devrions avoir compris un concept très simple mais assez important : les **navigateurs sont simplement des clients HTTP conçus pour l'internaute moyen** .

Ils sont certainement plus puissants que le client HTTP nu d'une plate-forme (pensez à NodeJS `require('http')`, par exemple), mais en fin de compte, ils ne sont « juste » qu'une évolution naturelle de clients HTTP plus simples.

En tant que développeurs, notre client HTTP de choix est probablement [cURL](https://translate.google.com/website?sl=auto&tl=fr&u=http://curl.haxx.se/) de Daniel Stenberg, l'un des logiciels les plus populaires utilisés quotidiennement par les développeurs Web. Il nous permet de faire un échange HTTP à la volée, en envoyant une requête HTTP depuis notre ligne de commande :

```
$ curl -I localhost:8080
```

```
HTTP/1.1 200 OKserver: ecstatic-2.2.1Content-Type: text/htmletag: "23724049-4096-"2018-07-20T11:20:35.526Z""last-modified: Fri, 20 Jul 2018 11:20:35 GMTcache-control: max-age=3600Date: Fri, 20 Jul 2018 11:21:02 GMTConnection: keep-alive
```

Dans l'exemple ci-dessus, nous avons demandé le document à `localhost:8080/`, et un serveur local a répondu avec succès.

Plutôt que de vider le corps de la réponse dans la ligne de commande, nous avons utilisé ici le `-I`drapeau qui indique à cURL que nous ne sommes intéressés que par les en-têtes de réponse. En faisant un pas en avant, nous pouvons demander à cURL de vider un peu plus d'informations, y compris la requête réelle qu'il exécute, afin que nous puissions avoir un meilleur aperçu de l'ensemble de cet échange HTTP. L'option que nous devons utiliser est `-v`(verbose) :

```
$ curl -I -v localhost:8080* Rebuilt URL to: localhost:8080/*   Trying 127.0.0.1...* Connected to localhost (127.0.0.1) port 8080 (#0)> HEAD / HTTP/1.1> Host: localhost:8080> User-Agent: curl/7.47.0> Accept: */*>< HTTP/1.1 200 OKHTTP/1.1 200 OK< server: ecstatic-2.2.1server: ecstatic-2.2.1< Content-Type: text/htmlContent-Type: text/html< etag: "23724049-4096-"2018-07-20T11:20:35.526Z""etag: "23724049-4096-"2018-07-20T11:20:35.526Z""< last-modified: Fri, 20 Jul 2018 11:20:35 GMTlast-modified: Fri, 20 Jul 2018 11:20:35 GMT< cache-control: max-age=3600cache-control: max-age=3600< Date: Fri, 20 Jul 2018 11:25:55 GMTDate: Fri, 20 Jul 2018 11:25:55 GMT< Connection: keep-aliveConnection: keep-alive
```

```
<* Connection #0 to host localhost left intact
```

À peu près les mêmes informations sont disponibles dans les navigateurs grand public via leurs DevTools.

Comme nous l'avons vu, les navigateurs ne sont rien de plus que des clients HTTP élaborés. Bien sûr, ils ajoutent une énorme quantité de fonctionnalités (pensez à la gestion des informations d'identification, aux signets, à l'historique, etc.), mais la vérité est qu'ils sont nés en tant que clients HTTP pour les humains. Ceci est important, car dans la plupart des cas, vous n'avez pas besoin d'un navigateur pour tester la sécurité de votre application Web, car vous pouvez simplement « la boucler » et jeter un œil à la réponse.

Une dernière chose que je voudrais souligner, c'est que **tout peut être un navigateur** . Si vous avez une application mobile qui consomme des API via le protocole HTTP, alors l'application est votre navigateur - il se trouve qu'il s'agit d'une application hautement personnalisée que vous avez créée vous-même, une application qui ne comprend qu'un type spécifique de réponses HTTP (de votre propre API) .

### Dans le protocole HTTP

Comme nous l'avons mentionné, les phases d' **échange** et de **rendu ****HTTP** sont celles que nous allons principalement couvrir, car elles fournissent le plus grand nombre de **vecteurs d'attaque** pour les utilisateurs malveillants.
