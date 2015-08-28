<?php

if($_POST['id_form'] == "one" or $_POST['id_form'] == "two"){

    if(($_POST['name'] != '') and ($_POST['email'] != '')){
        $name =strip_tags(trim($_POST['name']));     
        $email = strip_tags(trim($_POST['email']));
        $name_form = $_POST['name_form'];
        $title = 'Письмо c сайта парковый мангал';//тема сообщения
        $message =  'Письмо c сайта парковый мангал ('.$name_form.')' . "<br/>"                    
                    .'Имя: ' .$name."<br/>"                    
                    .'Почта: ' . $email . "<br/>";
                    
        // $to - кому отправляем
        $to = 'tender@hobbyka.ru';        
        // $from - от кого
        $from = 'tender@hobbyka.ru';
        $headers="Content-Type: text/html; charset=utf-8\nFrom: {$from}\n";
        mail($to, $title, $message, $headers);
        $arReturn = array (
            'statusid' => '2',
            'status' => 'yes'
        );
        print json_encode ($arReturn);
        exit();
    }else{
        $arReturn = array (
            'statusid' => '1',
            'status' => 'error'
        );
        print json_encode ($arReturn);
        exit();
    } 	
}
else if($_POST['id_form'] == "three" or $_POST['id_form'] == "four" or $_POST['id_form'] == "five"){

    if(($_POST['name'] != '') and ($_POST['phone'] != '')){
        $name =strip_tags(trim($_POST['name']));        
        $phone = strip_tags(trim($_POST['phone']));
        $name_form = $_POST['name_form'];
        $title = 'Письмо c сайта парковый мангал';//тема сообщения
        $message =  $name_form. "<br/>"                    
                    .'Имя: ' .$name."<br/>"                     
                    .'Телофон: ' . $phone . "<br/>";
        // $to - кому отправляем
        $to = 'tender@hobbyka.ru';        
        // $from - от кого
        $from = 'tender@hobbyka.ru';
        $headers="Content-Type: text/html; charset=utf-8\nFrom: {$from}\n";
        mail($to, $title, $message, $headers);
        $arReturn = array (
            'statusid' => '2',
            'status' => 'yes'
        );
        print json_encode ($arReturn);
        exit();
    }else{
        $arReturn = array (
            'statusid' => '1',
            'status' => 'error'
        );
        print json_encode ($arReturn);
        exit();
    }
}