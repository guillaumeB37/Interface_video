<html>
    <head>
        <title>Ecriture fichier csv</title>
    </head> 
    <body>
        <h1>Ecriture fichier csv</h1>
            <?php
                $f = fopen ("fichiertexte.csv","a+");
                fputs($f,$_POST['Nom'].';'.$_POST['Prenom'].';'.$_POST['Adresse'].';'.$_POST['Code_Postal'].';'.$_POST['Ville'].';'.$_POST['Telephone'].';'.$_POST['E-Mail'].';'.$_POST['Message'].';')
                fclose($f);






            ?>
    </body>
</html>