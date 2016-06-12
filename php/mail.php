<?php
/**
 * User File Doc Comment
 *
 * PHP Version 5.2
 *
 * @category User
 * @package  None
 * @author   julie planque <julie.planque34@gmail.com>
 * @license  http://opensource.org/licenses/gpl-license.php GNU Public License
 * @link     http://example.com/recipes
 */

/**
 * User Class Doc Comment
 *
 * @category Utilisateur
 * @package  None
 * @author   julie planque <julie.planque34@gmail.com>
 * @license  http://opensource.org/licenses/gpl-license.php GNU Public License
 * @link     http://example.com/recipes
 */
class Mail
{
    private $_name;
    private $_email;
    private $_message;


      /**
       * Envoi mail
       *
       * @param string $name     nom de l'expéditeur
       * @param string $email   email de l'expéditeur
       * @param string $message   sujet
       *
       * @return void
       */
      public function mailto($name, $email, $message)
      {   

        $sujet = "Demande de contact";
        $message = "Name : ".$_POST['name']."\r\n";
        $message = "Adresse email : ".$_POST['email']."\r\n";
        $message = "Message : ".$_POST['message']."\r\n";
        $entete = 'From: '.$_POST['email']."\r\n".
        'Reply-To: '.$_POST['email']."\r\n".
        'X-Mailer: PHP/'.phpversion();
            if (mail("julie.planque@epitech.eu", $sujet, $message, $entete)) {
                echo 'Message envoyé';
            } else {
              echo "Une erreur est survenue lors de l'envoi du formulaire par email";
            }
    }
}

?>