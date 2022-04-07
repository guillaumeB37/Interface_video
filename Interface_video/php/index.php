<html>
    <head>
        <title>Ecriture fichier cvs</title>
    </head> 
    <body>
        <h1>Ecriture fichier cvs</h1>
            <?php
                $f = fopen ("fichiertexte.csv","a+");
                fputs($f,$_POST['Nom'].';'.$_POST['Prenom'].';'.$_POST['Adresse'].';'.$_POST['Code_Postal'].';'.$_POST['Ville'].';'.$_POST['Telephone'].';'.$_POST['Email'].';'.$_POST['Message'].';')
                fclose($f);






            ?>
    </body>
</html>