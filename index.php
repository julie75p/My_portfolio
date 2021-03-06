<?php require_once "php/mail.php";
 $mail=new Mail();
  if (isset($_POST[ "name"]) AND !empty($_POST[ "email"]) AND !empty($_POST[ "message"])) { $mail->mailto($_POST["name"], $_POST["email"], $_POST["message"]); } 
  ?>
<!DOCTYPE html>
<html lang="en" ng-app="angularApp">

<head>
    <meta charset="utf-8">
    <title>Julie Planque Web Développeuse | julie.planque@epitech.eu</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">

    <!--Import Google Icon Font-->
    <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--Import materialize.css-->
    <link type="text/css" rel="stylesheet" href="css/materialize/css/materialize.min.css" media="screen,projection" />

    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Coming+Soon' rel='stylesheet' type='text/css'>
    <!-- <link rel="stylesheet" href="http://cdn.embed.ly/jquery.preview-0.3.2.css" /> -->

    <link rel="stylesheet" href="css/style.css" type="text/css" media="screen" charset="utf-8" />
</head>
<body ng-controller="indexCtrl">
    <div class="container">
        <nav>
            <div class="nav-wrapper">
                <a href="#!" class="name brand-logo" data-ng-bind="main_content.name"></a>
                <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
                <ul class="right hide-on-med-and-down nav mynav">
                    <li>
                        <a href="#presentation" data-ng-bind="main_content.menu[0]"> </a>
                    </li>
                    <li>
                        <a href="#competences" data-ng-bind="main_content.menu[1]"></a>
                    </li>
                    <li>
                        <a href="#experiences" data-ng-bind="main_content.menu[2]"></a>
                    </li>
                    <li>
                        <a href="#projet" data-ng-bind="main_content.menu[3]"></a>
                    </li>
                    <li>
                        <a href="#contactSection" data-ng-bind="main_content.menu[4]"></a>
                    </li>
                </ul>
                <ul class="side-nav" id="mobile-demo">
                    <li>
                        <a href="#presentation" data-ng-bind="main_content.menu[0]"> </a>
                    </li>
                    <li>
                        <a href="#competences" data-ng-bind="main_content.menu[1]"></a>
                    </li>
                    <li>
                        <a href="#experiences" data-ng-bind="main_content.menu[2]"></a>
                    </li>
                    <li>
                        <a href="#projet" data-ng-bind="main_content.menu[3]"></a>
                    </li>
                    <li>
                        <a href="#contactSection" data-ng-bind="main_content.menu[4]"></a>
                    </li>
                </ul>
            </div>
        </nav>
            <div id="carouselSection" class="cntr section scrollspy">
                <div id="myCarousel" class="carousel slide">
                    <div class="carousel-inner">
                        <div class="item active">
                            <h1 class="title_poste" data-ng-bind="main_content.poste"></h1>
                            <p>______</p>
                            <p class="subtitle_poste" data-ng-bind="main_content.mail"></p>
                            </a>
                        </div>
                        <!-- <div class=" innr col-md-12">
						<div class="text-box">
							<p class="intro">Introducing</p>
							<h2>Web Alert</h2>
						</div>
					</div> -->
                    </div>
                </div>
            </div>
            <div id="ourServices" class="col s12">
                <div class="row">
                    <div class="col s12 m12 l4">
                        <div class="info-img">
                            <img src="img/img-1.png">
                        </div>
                        <h4 data-ng-bind="main_content.slogans[0].title"></h4>
                        <p data-ng-bind="main_content.slogans[0].slogans"></p>
                    </div>
                    <div class="col s12 m12 l4">
                        <div class="info-img">
                            <img src="img/img-2.png">
                        </div>
                        <h4 data-ng-bind="main_content.slogans[1].title"></h4>
                        <p data-ng-bind="main_content.slogans[1].slogans"></p>
                    </div>
                    <div class="col s12 m12 l4">
                        <div class="info-img">
                            <img src="img/img-3.png">
                        </div>
                        <h4 data-ng-bind="main_content.slogans[2].title"></h4>
                        <p data-ng-bind="main_content.slogans[2].slogans"></p>
                    </div>
                </div>
            </div>
            <div id="meetourteamSection">
                <div class="title col s12 ">
                    <h2 data-ng-bind="main_content.subtitle[0].title"></h2>
                    <p id="presentation" class="section scrollspy">______</p>
                    <p data-ng-bind="main_content.subtitle[0].slogans"></p>
                </div>
                <div class="row">
                    <div class="tabbable">
                        <div class="tab-content label-primary">
                            <div class="tab-pane active" id="all">
                                <div class="col l5 s12">
                                    <div class="contentImgProfil">
                                        <!-- <img class="julie" src="img/julie.png" alt=""> -->
                                    </div>
                                </div>
                                <div class="col l7 s12">
                                    <div class="inner">
                                        <h1>A propos</h1>
                                        <hr>
                                        <p data-ng-bind="main_content.subtitle[0].content"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="competenceSection" class="col s12 ">
                <div  class="title_deux col s12 ">
                    <h2 data-ng-bind="main_content.subtitle[1].title"></h2>
                    <p id="competences" class="section scrollspy"  >______</p>
                    <p data-ng-bind="main_content.subtitle[1].slogans"></p>
                </div>
                    
                        <div class="col s12 section scrollspy">
                            <div class="inner">
                                <h1 data-ng-bind="main_content.subtitle[1].title_one"></h1>
                                <ul class="liste_competences col s12">
                                    <li ng-repeat="competence in main_content.langages" style="background-color : {{competence.color}}">{{competence.title}}</li>
                                </ul>
                                <h5 data-ng-bind="main_content.subtitle[1].title_three"></h5>
                                <ul class="liste_competences col s12">
                                    <li ng-repeat="competence in main_content.notions" style="background-color : {{competence.color}}">{{competence.title}}</li>
                                </ul>
                            </div>
                        </div>

                <hr class="soften clear" />
                <div class="col s12">
                    <div class="inner">
                        <h1 data-ng-bind="main_content.subtitle[1].title_two"></h1>
                        <ul class="liste_competences">
                            <li ng-repeat="competence in main_content.outils" style="background-color : {{competence.color}}">{{competence.title}}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="blogSection" class="col s12 section scrollspy"> 
                <div class="title_deux col s12">
                    <h2 data-ng-bind="main_content.subtitle[2].title"></h2>
                    <p id="experiences" class="section scrollspy">______</p>
                    <p data-ng-bind="main_content.subtitle[2].slogans"></p>
                </div>
                <div class="row">
                    <div class="col s12 m12 l6 offset-l1 offset-s0">
                        <div class="inner">
                            <h1 data-ng-bind="main_content.subtitle[2].experience_name_one"></h1>
                            <p data-ng-bind="main_content.subtitle[2].content_sublime"></p>
                            <a ng-href="http://sublimeskinz.com/">Visiter</a>
                        </div>
                    </div>
                    <div class="col s12 l4 m12 ctr ">
                        <img class="r-image-sublime" src="img/sublimeSkinz.png" alt="" />
                    </div>
                </div>
                <hr class="soften clear" />
                <div class="row">
                    <div class="col s12 m12 l6 offset-l1 offset-s0">
                        <div class="inner">
                            <h1 data-ng-bind="main_content.subtitle[2].experience_name_two"></h1>
                            <p data-ng-bind="main_content.subtitle[2].content_samsung"></p>
                            <a ng-href="https://campus.samsung.fr/">Visiter</a>
                        </div>
                    </div>
                    <div class="col s12 l4 m12 ctr">
                        <img class="r-image-sublime" src="img/samsungCampus.png" alt="" />
                    </div>
                </div>
            </div>
            <div id="portfolioSection" class="col s12 section scrollspy">
                <div class="col s12">
                    <h1 class="cntr" data-ng-bind="main_content.subtitle[3].title"></h1>
                    <p id="projet" class="section scrollspy" data-ng-bind="main_content.subtitle[3].slogans"></p>
                </div>
             <!--    <ul class="nav nav-pills pics-ul">
                    <li class="active"><a href="#all" data-toggle="tab">ALL</a>
                    </li>
                    <li><a href="#web" data-toggle="tab">WEB</a>
                    </li>
                    <li><a href="#mobile" data-toggle="tab">MOBILE</a>
                    </li>
                </ul> -->
              
                    <div class="row" >
                        <div class="card col s12 l3 offset-l1 offset-s0">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img class="activator " class="" src="img/my_diary.png">
                            </div>
                            <div class="card-content">
                                <span class="card-title activator grey-text text-darken-4">My Diary<i class="material-icons right">more_vert</i></span>
                                <p>
                                    <a href="My_Diary" data-ng-bind="main_content.lien_card"></a>
                                </p>
                            </div>
                            <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">My Diary<i class="material-icons right">close</i></span>
                                <p>Technologies: HTML/CSS, JS, PHP.</p>
                                <p>Responsive : Non </p>
                            </div>
                        </div>
                        <div class="card col s12 l3 ">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img class="activator" src="img/my_todolist.png">
                            </div>
                            <div class="card-content">
                                <span class="card-title activator grey-text text-darken-4">My TodoList<i class="material-icons right">more_vert</i></span>
                                <p>
                                    <a href="My_ToDoList" data-ng-bind="main_content.lien_card"></a>
                                </p>
                            </div>
                            <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">My TodoList<i class="material-icons right">close</i></span>
                                <p>Technologies: JS vanilla, Materialize.</p>
                                <p>Responsive : Oui </p>
                            </div>
                        </div>
                        <div class="card col s12 l3 ">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img class="activator" src="img/my_maps.png">
                            </div>
                            <div class="card-content">
                                <span class="card-title activator grey-text text-darken-4">My Maps<i class="material-icons right">more_vert</i></span>
                                <p>
                                    <a href="map" data-ng-bind="main_content.lien_card"></a>
                                </p>
                            </div>
                            <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">My Maps<i class="material-icons right">close</i></span>
                                <p>Technologies : API Google, Javascript, Bootstrap.</p>
                                <p>Responsive : Non </p>
                            </div>
                        </div>
                    </div>
              
            </div>
            <div id="contactSection" class="section scrollspy">
        
                    <h1 data-ng-bind="main_content.subtitle[5].title"></h1>
                <div class="row contact-row">
                    <form id="form" class="topBefore col s12" method="post" action="index.php">
                        <div class="row">
                            <div class="input-field col s12 l4 offset-l4">
                                <input id="name"  type="text" name="name" placeholder="NAME">
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12 l4 offset-l4">
                                <input id="email" type="text" name="email" placeholder="E-MAIL">
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12 l4 offset-l4">
                                <textarea id="message" type="text" name="message" placeholder="MESSAGE"></textarea>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12 l4 offset-l4">
                                <input id="submit" type="submit" value="Envoyer">
                            </div>
                        </div>
                    </form>
                </div>
               
            </div>

            <div class="footerSection" class="col s12">
                <div class="row">
                    <div class=" col s12 socialicon">
                        <ul class="menu">
                            <li>
                                <a class="linkedin" href="https://fr.linkedin.com/in/julieplanque"></a>
                            </li>
                            <li>
                                <a class="github" href=""></a>
                            </li>
                        </ul>
                    </div>
                    <div class="copyright col s12">
                        <p data-ng-bind="main_content.footer.mentions"></p>
                    </div>
                </div>
            </div>
    </div>
    <!-- Wrapper end -->


    <a href="#carouselSection" class="go-top"><i class="small material-icons">arrow_upward
</i></a>


    <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
    <script src="bower_components/angular/angular.js"></script>
    <script src="indexCtrl.js"></script>
    <!--Import jQuery before materialize.js-->
    <script type="text/javascript" src="css/materialize/js/materialize.min.js"></script>
    <script src="js/default.js"></script>
</body>

</html>