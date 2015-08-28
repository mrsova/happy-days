<?
if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
IncludeTemplateLangFile(__FILE__);
$curpage = $APPLICATION->GetCurPage(false);
?>
<!doctype html>
<html lang="<?=LANGUAGE_ID?>">
<head>
	<title><?$APPLICATION->ShowTitle()?></title>
	<!--[if IE]>
		<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
	<link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
	<?$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH . "/css/reset.css")?>
	<?$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH . "/css/bootstrap.css")?>
	<?$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH . "/css/flexslider.css")?>
	<?$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH . "/js/jquery.flexslider-min.js")?>
	<?$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH . "/js/main.js")?>
	<?$APPLICATION->ShowHead();?>
	<link rel="shortcut icon" href="/favicon.png">
	<link rel="apple-touch-icon" href="/favicon.png">
</head>
<body>
	<div id="panel"><?$APPLICATION->ShowPanel();?></div>
	<section class="main_wrap">
		<?$APPLICATION->IncludeComponent(
			"bitrix:main.include",
			"",
			Array(
				"AREA_FILE_SHOW" => "file",
				"PATH" => "/include/file_name.php",
				"EDIT_TEMPLATE" => ""
			),
		false
		);?>


		<?if ($curpage == SITE_DIR):?>
		<?elseif ($curpage == '/some_dir/'):?>
		<?else:?>
		<?endif?>
		<h1><?$APPLICATION->ShowTitle(false)?></h1>

		<a href="#popup_1">Show popup</a>

		<div class="popup_window_wrap" id='popup_1'><div class="popup_window"><div>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, eos, eum eveniet cumque sit natus veniam libero ea quisquam fuga quis placeat soluta accusamus debitis voluptatibus quasi molestiae! Labore, delectus.
			<a href="#close_popup_window" class="close_popup_window"></a>
		</div></div><div class="helper"></div><a href="#close_popup_window" class="bg_close_popup_window"></a></div>