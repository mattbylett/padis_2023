-- MySQL dump 10.13  Distrib 8.0.21, for macos10.15 (x86_64)
--
-- Host: 127.0.0.1    Database: insinc-local
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admins`
--

DROP TABLE IF EXISTS `admins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admins` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `current_team_id` bigint unsigned DEFAULT NULL,
  `profile_photo_path` text COLLATE utf8mb4_unicode_ci,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `admins_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admins`
--

LOCK TABLES `admins` WRITE;
/*!40000 ALTER TABLE `admins` DISABLE KEYS */;
INSERT INTO `admins` VALUES (1,'Admin','admin@insinc.co.nz','2022-11-29 13:44:25','$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi','9SKDmSOMkcI75vgZupePn0gjMvGb5AC9eLCCRPtMlOxe96J0twrd2McLhRum',NULL,NULL,NULL,'2022-11-29 13:44:25','2022-11-29 13:44:25');
/*!40000 ALTER TABLE `admins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `failed_jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2014_10_12_000000_create_users_table',1),(2,'2014_10_12_100000_create_password_resets_table',1),(3,'2014_10_12_200000_add_two_factor_columns_to_users_table',1),(4,'2019_08_19_000000_create_failed_jobs_table',1),(5,'2019_12_14_000001_create_personal_access_tokens_table',1),(6,'2021_01_24_174516_create_sessions_table',1),(7,'2021_01_24_182753_create_admins_table',1),(8,'2021_01_24_182818_create_suppliers_table',1),(9,'2021_01_24_182853_create_products_table',1),(10,'2021_05_06_024223_create_website_ids_table',1),(11,'2022_12_10_222019_create_new_products_table',2);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `new_products`
--

DROP TABLE IF EXISTS `new_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `new_products` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `internal_id` int DEFAULT NULL,
  `pid` int DEFAULT NULL,
  `website_additional_text` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vendor_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `website_availablilty_text` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `website_categories` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `website_description` text COLLATE utf8mb4_unicode_ci,
  `website_disable_buy_button` int DEFAULT NULL,
  `website_display_cafe_supplies` int DEFAULT NULL,
  `website_display_car_cleaning` int DEFAULT NULL,
  `website_display_hand_sanitiser` int DEFAULT NULL,
  `website_display_insinc_products` int DEFAULT NULL,
  `website_display_packnet` int DEFAULT NULL,
  `website_display_rubbish_bags` int DEFAULT NULL,
  `website_environmental_impact_logo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `website_exclude_standard_freight_fees` int DEFAULT NULL,
  `website_featured_product` int DEFAULT NULL,
  `website_fixed_freight_cost` decimal(13,2) DEFAULT NULL,
  `website_freight_weight` int DEFAULT NULL,
  `website_item_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `website_more_information` text COLLATE utf8mb4_unicode_ci,
  `website_pdf_documents` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `website_product_features` text COLLATE utf8mb4_unicode_ci,
  `website_promotion_order_confirm` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `website_promotion_view_cart` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `website_quantity_in_stock` int DEFAULT NULL,
  `website_remove_buy_button` int DEFAULT NULL,
  `website_stock_available` int DEFAULT NULL,
  `website_display_disposable_gloves` int DEFAULT NULL,
  `website_weekly_special` int DEFAULT NULL,
  `website_videos` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `display_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `display_in_web_site` int DEFAULT NULL,
  `environmental_impact` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `item_image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `not_loaded_on_any_website` int DEFAULT NULL,
  `obsolete` int DEFAULT NULL,
  `out_of_stock` int DEFAULT NULL,
  `promotion_end_date` date DEFAULT NULL,
  `promotional_item` int DEFAULT NULL,
  `promotional_price` decimal(13,2) DEFAULT NULL,
  `purchase_price` decimal(13,2) DEFAULT NULL,
  `sales_price` decimal(13,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `website_unit_of_measure` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `website_show_buy_button` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5714 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `new_products`
--

LOCK TABLES `new_products` WRITE;
/*!40000 ALTER TABLE `new_products` DISABLE KEYS */;
INSERT INTO `new_products` VALUES (5686,'BB OC5513 indiv',21702,3411168,'Mixed Eco/Regular','Ecobagsnz Ltd',NULL,NULL,'13L Medium Ocean/Recycled Plastic Bags (White with handles) . Industrial range.  Bag size: (260+160) x 500mm   Be part of the solution, not the pollution.  Eight million tons of plastic pollution ours into our oceans every year. And it’s now k(more...)',0,0,0,0,1,0,1,NULL,0,0,NULL,1250,'13L Medium Ocean/Recycled Plastic Bags (White) Pack 100 - Ecobags',NULL,NULL,NULL,'0','0',NULL,0,NULL,0,0,NULL,'BB 13L Medium Ocean/Recycled Plastic Bags (White) Pack 100','BB 13L Medium Ocean/Recycled Plastic Bags (White) Pack 100',0,'Mixed Eco/Regular',NULL,0,0,0,NULL,0,NULL,4.20,6.64,'2022-12-10 12:56:34','2022-12-10 12:56:34',NULL,NULL),(5687,'BB OC5518 indiv',21703,3411205,'Mixed Eco/Regular','Ecobagsnz Ltd',NULL,NULL,'18L Large Ocean/Recycled Plastic Bags (White with handles). Industrial range.  Bag size: (290 + 190) x 585mm  Be part of the solution, not the pollution.  Eight million tons of plastic pollution ours into our oceans every year. And it’s now kno(more...)',0,0,0,0,1,0,1,NULL,0,0,NULL,1250,'18L Large Ocean/Recycled Plastic Bags (White)  Pack 100 - Ecobags',NULL,NULL,NULL,'0','0',NULL,0,9999,0,0,NULL,'BB 18L Large Ocean/Recycled Plastic Bags (White) Pack 100','BB 18L Large Ocean/Recycled Plastic Bags (White) Pack 100',0,'Mixed Eco/Regular',NULL,0,0,0,NULL,0,NULL,5.40,8.53,'2022-12-10 12:56:34','2022-12-10 12:56:34',NULL,NULL),(5688,'BB OC5527 indiv',21704,3411211,'Mixed Eco/Regular','Ecobagsnz Ltd',NULL,NULL,'27L Medium Ocean/Recycled Plastic Bin Liners (White). Industrial range.  Bag size: 470 x 585  Be part of the solution, not the pollution.  Eight million tons of plastic pollution ours into our oceans every year. And it’s now known that 80% of m(more...)',0,0,0,0,1,0,1,NULL,0,0,NULL,1250,'27L Medium Ocean/Recycled Plastic Bin Liners (White) Roll 50 - Ecobags',NULL,NULL,NULL,'0','0',NULL,0,9999,0,0,NULL,'BB 27L Medium Ocean/Recycled Plastic Bin Liners (White)','BB 27L Medium Ocean/Recycled Plastic Bin Liners (White) Roll 50',0,'Mixed Eco/Regular',NULL,0,0,0,NULL,0,NULL,2.80,4.42,'2022-12-10 12:56:34','2022-12-10 12:56:34',NULL,NULL),(5689,'BB OC5536 indiv',21705,3411213,'Mixed Eco/Regular','Ecobagsnz Ltd',NULL,NULL,'36L Large Ocean/Recycled Plastic Bin Liners (White). Industrial range.  Bag size: 580 x 710mm   Be part of the solution, not the pollution.  Eight million tons of plastic pollution ours into our oceans every year. And it’s now known that 80% o(more...)',0,0,0,0,1,0,1,NULL,0,0,NULL,1250,'36L Large Ocean/Recycled Plastic Bin Liners (White) Roll 30',NULL,NULL,NULL,'0','0',NULL,0,9999,0,0,NULL,'BB 36L Large Ocean/Recycled Plastic Bin Liners (White) Roll 30','BB 36L Large Ocean/Recycled Plastic Bin Liners (White) Roll 30',0,'Mixed Eco/Regular',NULL,0,0,0,NULL,0,NULL,2.50,3.95,'2022-12-10 12:56:34','2022-12-10 12:56:34',NULL,NULL),(5690,'BB OC5560 indiv',21706,3411215,'Mixed Eco/Regular','Ecobagsnz Ltd',NULL,NULL,'60L XL Ocean/Recycled Plastic Bin Liners (Black). Flat top. Industrial range.  Bag size: (360 + 290) x 950mm   Be part of the solution, not the pollution.  Eight million tons of plastic pollution ours into our oceans every year. And it’s now k(more...)',0,0,0,0,1,0,1,NULL,0,0,NULL,1250,'60L XL Ocean/Recycled Plastic Bin Liners (Black) Roll 30 - Ecobags',NULL,NULL,NULL,'0','0',NULL,0,9999,0,0,NULL,'BB 60L XL Ocean/Recycled Plastic Bin Liners (Black) Roll 30','BB 60L XL Ocean/Recycled Plastic Bin Liners (Black) Roll 30',0,'Mixed Eco/Regular',NULL,0,0,0,NULL,0,NULL,5.90,9.32,'2022-12-10 12:56:34','2022-12-10 12:56:34',NULL,NULL),(5691,'BB OC5580 indiv',21707,3411217,'Mixed Eco/Regular','Ecobagsnz Ltd',NULL,NULL,'80L Ocean/Recycled Bin Liners in Dispenser Box (Black with string tie). Industrial range.  Bag size: 780 x 1020mm  Be part of the solution, not the pollution.  Eight million tons of plastic pollution ours into our oceans every year. And it’s no(more...)',0,0,0,0,1,0,1,NULL,0,0,NULL,1250,'80L Ocean/Recycled Bin Liners in Dispenser Box (Black) Box 100 - Ecobags',NULL,NULL,NULL,'0','0',NULL,0,9999,0,0,NULL,'BB 80L Ocean/Recycled Bin Liners in Dispenser Box (Black) Box 100','BB 80L Ocean/Recycled Bin Liners in Dispenser Box (Black) Box 100',0,'Mixed Eco/Regular',NULL,0,0,0,NULL,0,NULL,29.00,45.82,'2022-12-10 12:56:34','2022-12-10 12:56:34',NULL,NULL),(5692,'BB OC5120 indiv',21709,3411219,'Mixed Eco/Regular','Ecobagsnz Ltd',NULL,NULL,'120L Ocean/Recycled Wheelie Bin Liners (Black with flat top). Industrial range.  Bag size: 900 x 1350mm   Be part of the solution, not the pollution.  Eight million tons of plastic pollution ours into our oceans every year. And it’s now known (more...)',0,0,0,0,1,0,1,NULL,0,0,NULL,1250,'120L Ocean/Recycled Wheelie Bin Liners (Black) Roll 25 - Ecobags',NULL,NULL,NULL,'0','0',NULL,0,NULL,0,0,NULL,'BB 120L Ocean/Recycled Wheelie Bin Liners (Black) Roll 25','BB 120L Ocean/Recycled Wheelie Bin Liners (Black) Roll 25',0,'Mixed Eco/Regular',NULL,0,0,0,NULL,0,NULL,7.00,NULL,'2022-12-10 12:56:34','2022-12-10 12:56:34',NULL,NULL),(5693,'BB OC-70 indiv',21700,3411852,'Mixed Eco/Regular','Ecobagsnz Ltd',NULL,NULL,'These new bin liners are made from 60% recycled ocean-bound plastic waste. They\'re the perfect for extra large kitchen bins, garage bins and commercial use. They have a drawstring closure to make it super easy to tie off and carry away. Do your part (more...)',0,0,0,0,1,0,1,NULL,0,0,NULL,1250,'70L XL Ocean Plastic Bin Liners (Black) Roll 5',NULL,NULL,NULL,'0','0',NULL,0,NULL,0,0,NULL,'BB 70L XL Ocean Plastic Bin Liners (Black) Roll 5','BB 70L XL Ocean Plastic Bin Liners (Black) Roll 5',0,'Mixed Eco/Regular',NULL,0,0,0,NULL,0,NULL,2.07,NULL,'2022-12-10 12:56:34','2022-12-10 12:56:34',NULL,NULL),(5694,'SG PS302 - L ACM',21712,3413728,'Mixed Eco/Regular','Safety Genius',NULL,NULL,'No Entry Authorised Personal only   Made with ACM (Aluminium Composite Material) a sturdier, longer lasting product.  Sign size: 480x600 Rigid ACM Board',0,0,0,0,1,0,0,NULL,0,0,NULL,1250,'No Entry Authorised Personal only 480x600 RIGID ACM BOARD','Made in NZ. Manufactured with Solvent Free Latex Inks.',NULL,NULL,'0','0',NULL,0,9999,0,0,NULL,'SG NO ENTRY AUTHORISED PERSONNEL ONLY PS302 480x600','NO ENTRY AUTHORISED PERSONNEL ONLY PS302 480x600 RIGID ACM BOARD',0,'Mixed Eco/Regular',NULL,0,0,0,NULL,0,NULL,30.42,48.83,'2022-12-10 12:56:34','2022-12-10 12:56:34',NULL,NULL),(5695,'SG EX701 - ACM',21713,3413732,'Mixed Eco/Regular','Safety Genius',NULL,NULL,'Exit sign 340x200 Rigid ACM Board  Made with ACM (Aluminium Composite Material) a sturdier, longer lasting product.  Size: 340 x 200mm',0,0,0,0,1,0,0,NULL,0,0,NULL,1250,'Exit sign 340x200 Rigid ACM Board',NULL,NULL,NULL,'0','0',NULL,0,9999,0,0,NULL,'SG Exit sign 340x200 Rigid ACM Board','Exit sign 340x200 Rigid ACM Board',0,'Mixed Eco/Regular',NULL,0,0,0,NULL,0,NULL,12.50,15.50,'2022-12-10 12:56:34','2022-12-10 12:56:34',NULL,NULL),(5696,'SG PS346 - S ACM',21714,3413733,'Mixed Eco/Regular','Safety Genius',NULL,NULL,'No smoking or vaping sign 240x340 ACM.  Made with ACM (Aluminium Composite Material) a sturdier, longer lasting product.  Size: 240 X 340MM',0,0,0,0,1,0,0,NULL,0,0,NULL,1250,'No smoking or vaping sign 240x340 ACM',NULL,NULL,NULL,'0','0',NULL,0,9999,0,0,NULL,'SG No smoking or vaping sign 240x340 ACM','No smoking or vaping sign 240x340 ACM',0,'Mixed Eco/Regular',NULL,0,0,0,NULL,0,NULL,12.50,24.50,'2022-12-10 12:56:34','2022-12-10 12:56:34',NULL,NULL),(5697,'FL1502 Floor Stand',21715,3413734,'Mixed Eco/Regular','Safety Genius',NULL,NULL,'Yellow plastic floor stand  Message: Warning Slippery Surface',0,0,0,0,1,0,0,NULL,0,0,NULL,1250,'Slippery Surface Floor Sign Yellow',NULL,NULL,NULL,'0','0',NULL,0,9999,0,0,NULL,'SG Slippery Surface Floor Sign Yellow','Slippery Surface Floor Sign Yellow',0,'Mixed Eco/Regular',NULL,0,0,0,NULL,0,NULL,11.50,22.05,'2022-12-10 12:56:34','2022-12-10 12:56:34',NULL,NULL),(5698,'SG FL1503 Floor Stand',21716,3413739,'Mixed Eco/Regular','Safety Genius',NULL,NULL,'Yellow plastic floor stand  Message: Warning Watch Your Step',0,0,0,0,1,0,0,NULL,0,0,NULL,1250,'Watch Your Step Floor Sign Yellow',NULL,NULL,NULL,'0','0',NULL,0,9999,0,0,NULL,'SG Watch Your Step Sign','Watch Your Step Sign Yellow',0,'Mixed Eco/Regular',NULL,0,0,0,NULL,0,NULL,11.50,22.05,'2022-12-10 12:56:34','2022-12-10 12:56:34',NULL,NULL),(5699,'SG FL1510 Floor Stand',21717,3413744,'Mixed Eco/Regular','Safety Genius',NULL,NULL,'Yellow plastic floor stand  Message: Cleaning In Progress',0,0,0,0,1,0,0,NULL,0,0,NULL,1250,'Cleaning In Progress Floor Sign Yellow',NULL,NULL,NULL,'0','0',NULL,0,9999,0,0,NULL,'SG Cleaning In Progress Floor Sign','Cleaning In Progress Floor Sign Yellow',0,'Mixed Eco/Regular',NULL,0,0,0,NULL,0,NULL,11.50,22.05,'2022-12-10 12:56:34','2022-12-10 12:56:34',NULL,NULL),(5700,'SG FL1520 ACM Hinged 600x800',21718,3413749,'Mixed Eco/Regular','Safety Genius',NULL,NULL,'Custom A-Frame sign - printed to your requirements.  Made with ACM (Aluminium Composite Material) a sturdier, longer lasting product.',0,0,0,0,1,0,0,NULL,0,0,NULL,1250,'A-Frame Sign Custom 600x800',NULL,NULL,NULL,'0','0',NULL,0,9999,0,0,NULL,'A-Frame Sign Custom 600x800','A-Frame Sign Custom 600x800. Printed to your requirements',0,'Mixed Eco/Regular',NULL,0,0,0,NULL,0,NULL,129.95,194.25,'2022-12-10 12:56:34','2022-12-10 12:56:34',NULL,NULL),(5701,'SG TRM - GS1210 - ACM',21719,3413752,'Mixed Eco/Regular','Safety Genius',NULL,NULL,'KOPAKOPA - Te Reo Maori Toilet Sign (Disabled).  Made with ACM (Aluminium Composite Material) a sturdier, longer lasting product.  Size: 200 x 200mm',0,0,0,0,1,0,0,NULL,0,0,NULL,1250,'Te Reo Maori Toilet Sign (Disabled) KOPAKOPA 200x200mm',NULL,NULL,NULL,'0','0',NULL,0,9999,0,0,NULL,'SG Te Reo Maori Toilet Sign (Disabled) KOPAKOPA','Te Reo Maori Toilet Sign (Disabled) KOPAKOPA 200x200mm',0,'Mixed Eco/Regular',NULL,0,0,0,NULL,0,NULL,7.99,16.50,'2022-12-10 12:56:34','2022-12-10 12:56:34',NULL,NULL),(5702,'SG TRM - GS1210 - ACM BL',21720,3413753,'Mixed Eco/Regular','Safety Genius',NULL,NULL,'KOPAKOPA - Te Reo Maori & English Toilet Sign (Disabled).  Made with ACM (Aluminium Composite Material) a sturdier, longer lasting product.  Size: 200 x 200mm',0,0,0,0,1,0,0,NULL,0,0,NULL,1250,'Te Reo Maori & English Toilet Sign (Disabled) KOPAKOPA 200x200mm',NULL,NULL,NULL,'0','0',NULL,0,9999,0,0,NULL,'SG Te Reo Maori & English Toilet Sign (Disabled) KOPAKOPA','Te Reo Maori & English Toilet Sign (Disabled) KOPAKOPA 200x200mm',0,'Mixed Eco/Regular',NULL,0,0,0,NULL,0,NULL,7.99,16.50,'2022-12-10 12:56:34','2022-12-10 12:56:34',NULL,NULL),(5703,'SG TRM - GS1209 - ACM',21721,3413754,'Mixed Eco/Regular','Safety Genius',NULL,NULL,'TAMA - Te Reo Maori Toilet Sign (Boys).  Made with ACM (Aluminium Composite Material) a sturdier, longer lasting product.  Size: 200 x 200mm',0,0,0,0,1,0,0,NULL,0,0,NULL,1250,'Te Reo Maori Toilet Sign TAMA (Boys) 200x200mm',NULL,NULL,NULL,'0','0',NULL,0,9999,0,0,NULL,'SG Te Reo Maori Toilet Sign TAMA (Boys) 200x200mm','Te Reo Maori Toilet Sign TAMA (Boys) 200x200mm',0,'Mixed Eco/Regular',NULL,0,0,0,NULL,0,NULL,7.99,16.50,'2022-12-10 12:56:34','2022-12-10 12:56:34',NULL,NULL),(5704,'SG TRM - GS1209 - ACM BL',21722,3413755,'Mixed Eco/Regular','Safety Genius',NULL,NULL,'TAMA / MALE - Te Reo Maori Toilet Sign.  Made with ACM (Aluminium Composite Material) a sturdier, longer lasting product.  Size: 200 x 200mm',0,0,0,0,1,0,0,NULL,0,0,NULL,1250,'Te Reo Maori & English Toilet Sign TAMA / Male 200x200mm',NULL,NULL,NULL,'0','0',NULL,0,9999,0,0,NULL,'Te Reo Maori Toilet Sign TAMA / Male 200x200mm','Te Reo Maori Toilet Sign TAMA / Male 200x200mm',0,'Mixed Eco/Regular',NULL,0,0,0,NULL,0,NULL,7.99,16.50,'2022-12-10 12:56:34','2022-12-10 12:56:34',NULL,NULL),(5705,'SG TRM - EM806 - S ACM',21723,3413756,'Mixed Eco/Regular','Safety Genius',NULL,NULL,'Te Reo Maori Sign TUNGA HAUMARU (Assembly Point with 3 People)  Made with ACM (Aluminium Composite Material) a sturdier, longer lasting product.  Size: 240 x 340mm',0,0,0,0,1,0,0,NULL,0,0,NULL,1250,'Te Reo Maori Sign TUNGA HAUMARU (Assembly Point with 3 People) 240x340mm',NULL,NULL,NULL,'0','0',NULL,0,9999,0,0,NULL,'SG Te Reo Maori Sign TUNGA HAUMARU (Assembly Point with 3 People)','Te Reo Maori Sign TUNGA HAUMARU (Assembly Point with 3 People) 240x340mm',0,'Mixed Eco/Regular',NULL,0,0,0,NULL,0,NULL,12.50,24.50,'2022-12-10 12:56:34','2022-12-10 12:56:34',NULL,NULL),(5706,'SG TRM - EX701 - ACM',21724,3413758,'Mixed Eco/Regular','Safety Genius',NULL,NULL,'Te Reo Māori Sign - Putanga (Exit) 340x200mm  Made with ACM (Aluminium Composite Material) a sturdier, longer lasting product.  Size: 340 x 200mm',0,0,0,0,1,0,0,NULL,0,0,NULL,1250,'Te Reo Māori Sign - Putanga (Exit) 340x200',NULL,NULL,NULL,'0','0',NULL,0,9999,0,0,NULL,'SG Te Reo Māori Sign - Putanga / Exit','SG Te Reo Māori Sign - Putanga (Exit) 340 x 200mm',0,'Mixed Eco/Regular',NULL,0,0,0,NULL,0,NULL,12.50,24.50,'2022-12-10 12:56:34','2022-12-10 12:56:34',NULL,NULL),(5707,'SG TRM - EX701 - ACM BL',21725,3413759,'Mixed Eco/Regular','Safety Genius',NULL,NULL,'Te Reo Māori & English Sign - Putanga / Exit 340x200  Made with ACM (Aluminium Composite Material) a sturdier, longer lasting product.  Size: 340 x 200mm',0,0,0,0,1,0,0,NULL,0,0,NULL,1250,'Te Reo Māori & English Sign - Putanga / Exit 340x200',NULL,NULL,NULL,'0','0',NULL,0,9999,0,0,NULL,'SG Te Reo Māori Signs - Putanga / Exit 340 x 200mm','SG Te Reo Māori Signs - Putanga / Exit 340 x 200mm',0,'Mixed Eco/Regular',NULL,0,0,0,NULL,0,NULL,12.50,24.50,'2022-12-10 12:56:34','2022-12-10 12:56:34',NULL,NULL),(5708,'UP 100/463 indiv',21728,3415942,'Regular','Uni-Pak',NULL,NULL,'Bastion Vinyl Ultra Powder Free Blue Gloves are a low-cost disposable glove option for lower risk work environments, such as food service and hairdressing:  Longer shelf life compared to latex Ideal for high use applications where blood and fluids(more...)',0,0,0,0,1,0,0,NULL,0,0,NULL,500,'Vinyl Ultra P/F Blue Gloves Large - Bastion',NULL,NULL,NULL,'0','0',NULL,0,NULL,1,0,NULL,'UP Bastion Vinyl Ultra P/F Blue Large Gloves Pack 100','UP Bastion Vinyl Ultra P/F Blue Large Gloves Pack 100',0,'Regular',NULL,0,0,0,NULL,0,NULL,4.50,8.80,'2022-12-10 12:56:34','2022-12-10 12:56:34',NULL,NULL),(5709,'UP 100/464 indiv',21729,3415944,'Regular','Uni-Pak',NULL,NULL,'Bastion Vinyl Ultra Powder Free Blue Gloves are a low-cost disposable glove option for lower risk work environments, such as food service and hairdressing:  Longer shelf life compared to latex Ideal for high use applications where blood and fluids(more...)',0,0,0,0,1,0,0,NULL,0,0,NULL,500,'Vinyl Ultra P/F Blue Gloves X-Large - Bastion',NULL,NULL,NULL,'0','0',NULL,0,NULL,1,0,NULL,'UP Bastion Vinyl Ultra P/F Blue X-Large Gloves Pack 100','UP Bastion Vinyl Ultra P/F Blue X-Large Gloves Pack 100',0,'Regular',NULL,0,0,0,NULL,0,NULL,4.50,8.80,'2022-12-10 12:56:34','2022-12-10 12:56:34',NULL,NULL),(5710,'UP 100/254 indiv',21730,3415946,'Regular','Uni-Pak',NULL,NULL,'Bastion Nitrile Soft Blue P/F Gloves are popular for high-risk emergency situations when a thinner glove is preferred:  Superior puncture resistance and surface strength over latex Superior resistance to blood contamination Dermatologically teste(more...)',0,0,0,0,1,0,0,NULL,0,0,NULL,1250,'Nitrile Soft Blue Powder Free Gloves - X-LARGE Pack 100 - Bastion',NULL,NULL,NULL,'0','0',NULL,0,9999,1,0,NULL,'UP Nitrile Blue SoftTch P/F X-Large Pack 100','UP Nitrile Blue SoftTouch Powder Free X-Large Pack 100',0,'Regular',NULL,0,0,0,NULL,0,NULL,9.00,22.00,'2022-12-10 12:56:34','2022-12-10 12:56:34',NULL,NULL),(5711,'HX H/CK218',21731,3416226,'Eco-Friendly','Harxin Corporation(NZ) Ltd',NULL,NULL,'Toilet rolls made from wheat straw.  3ply, 280sheets per roll.  8packs of 12 rolls (96 rolls)',0,0,0,0,1,0,0,NULL,0,0,NULL,5000,'Toilet Rolls Wheat Straw 3ply 280sh 8pk x 12rolls - Tranlin',NULL,NULL,NULL,'0','0',NULL,0,9999,0,0,NULL,'HX Toilet paper Wheat Straw 8pk of 12 rolls','HX Toilet paper Wheat Straw 3ply 280sh  8pk of 12 rolls Tranlin',0,'Eco-Friendly',NULL,0,0,0,NULL,0,NULL,88.00,127.60,'2022-12-10 12:56:34','2022-12-10 12:56:34',NULL,NULL),(5712,'HX H/CK285',21732,3416227,'Eco-Friendly','Harxin Corporation(NZ) Ltd',NULL,NULL,'Toilet rolls made from wheat straw.  3ply, 280sheets per roll.  6packs of 10 rolls (60 rolls)',0,0,0,0,1,0,0,NULL,0,0,NULL,5000,'Toilet Rolls Wheat Straw 3ply 280sh 6pk x 10rolls - Tranlin',NULL,NULL,NULL,'0','0',NULL,0,9999,0,0,NULL,'HX Toilet paper Wheat Straw 6pk of 10 rolls','HX Toilet paper Wheat Straw 3ply 280sh  6pk of 10 rolls Tranlin',0,'Eco-Friendly',NULL,0,0,0,NULL,0,NULL,66.00,95.70,'2022-12-10 12:56:34','2022-12-10 12:56:34',NULL,NULL),(5713,'UP 100/208 indiv',21749,3416773,'Regular','Uni-Pak',NULL,NULL,'Bastion Blue Nitrile Powder Free Gloves are popular for high-risk emergency situations where body protection is paramount:  Superior puncture resistance and surface strength over latex Superior resistance to blood contamination Dermatologically t(more...)',0,0,0,0,1,0,0,NULL,0,0,NULL,1250,'Nitrile PowderFree Gloves 300mm Cuff X-LARGE Pack 100 - Bastion',NULL,NULL,NULL,'0','0',NULL,0,9999,1,0,NULL,'UP Nitrile Gloves Blue P/F 300mm X-Large Pack 100','UP Nitrile Gloves Blue Powderfree 300mm X-Large Pack 100',0,'Regular',NULL,0,0,0,NULL,0,NULL,14.90,24.59,'2022-12-10 12:56:34','2022-12-10 12:56:34',NULL,NULL);
/*!40000 ALTER TABLE `new_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_resets`
--

LOCK TABLES `password_resets` WRITE;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `pid` bigint unsigned DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vendor_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `display_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `base_price` int DEFAULT NULL,
  `purchase_price` int DEFAULT NULL,
  `vendor` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `website_fixed_freight_cost` int DEFAULT NULL,
  `website_availability_text` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `website_description` text COLLATE utf8mb4_unicode_ci,
  `website_display_cafe_supplies` int DEFAULT NULL,
  `website_display_car_cleaning` int DEFAULT NULL,
  `website_display_hand_sanitiser` int DEFAULT NULL,
  `website_display_insinc_products` int DEFAULT NULL,
  `website_display_packnet` int DEFAULT NULL,
  `website_display_rubbish_bags` int DEFAULT NULL,
  `website_display_disposable_gloves` int DEFAULT NULL,
  `website_freight_weight` int DEFAULT NULL,
  `website_quantity_in_stock` int DEFAULT NULL,
  `website_item_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `website_show_buy_button` longtext COLLATE utf8mb4_unicode_ci,
  `website_stock_available` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `website_unit_of_measure` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `out_of_stock` int DEFAULT NULL,
  `item_image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `promotional_item` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `environmental_impact` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `promotional_price` int DEFAULT NULL,
  `promotion_end_date` date DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21526 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (262,900210,'AR A256P','A256P','AR Hand Dryer Econo Dri White with Grey Trim','- Fast Dry Time. \r\n- Antimicrobial Infused Plastics. \r\n- Fully Automatic Infra-Red Operation. \r\n- Energy Efficient - very low operating cost. \r\n- Powerful Air Performance. \r\n- Slim unobtrusive profile.\r\n- Long Life Motor and carbon brushes.\r\n\r\nSize: 273mm high x 256mm wide x 173mm deep.\r\n\r\nHand dryer is double insulated and does not require earthing. Hand dryer is provided with a supply cord and plug. Dryer may be fixed wired.',341,270,'Ardrich Limited',0,'0','Hand Dryer EconoDri White with Grey Trim - Ardrich',0,0,0,1,0,0,0,7000,NULL,'Hand Dryer EconoDri White with Grey Trim - Ardrich','1','9999','per Each',0,NULL,'0','Regular',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:25:05'),(263,1233060,'AR A256PB','A256PB','AR Hand Dryer Econodry Black','FAST DRY TIME \r\n&#8226; ANTIMICROBIAL INFUSED PLASTICS\r\n&#8226; FULLY AUTOMATIC INFRA-RED OPERATION\r\n&#8226; ENERGY EFFICIENT - VERY LOW OPERATING COST\r\n&#8226; POWERFUL AIR PERFORMANCE\r\n&#8226; SLIM UNOBTRUSIVE PROFILE\r\n&#8226; LONG LIFE MOTOR AND CARBON BRUSHES\r\n\r\nSAFE SURFACES \r\nOur revolutionary antimicrobial infused components inhibit the growth of microbes including staphylococcus and E.coli.\r\nComponents are manufactured from special resins using EPA approved silver ion technology',395,276,'Ardrich Limited',0,'0','Hand Dryer EconoDri Black - Ardrich',0,0,0,1,0,0,0,7000,NULL,'Hand Dryer EconoDri Black - Ardrich','1','9999','per Each',0,NULL,'0','Regular',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:25:25'),(264,1233058,'AR A256PS','A256PS','AR Hand Dryer Econodry Silver Metalic','FAST DRY TIME \r\n&#8226; ANTIMICROBIAL INFUSED PLASTICS\r\n&#8226; FULLY AUTOMATIC INFRA-RED OPERATION\r\n&#8226; ENERGY EFFICIENT - VERY LOW OPERATING COST\r\n&#8226; POWERFUL AIR PERFORMANCE\r\n&#8226; SLIM UNOBTRUSIVE PROFILE\r\n&#8226; LONG LIFE MOTOR AND CARBON BRUSHES\r\n\r\nSAFE SURFACES \r\nOur revolutionary antimicrobial infused components inhibit the growth \r\nof microbes including Staphylococcus and E.coli.\r\nComponents are manufactured from special resins using EPA approved silver ion technology that infuses plastic parts and coatings \r\nwith antimicrobial properties.',395,276,'Ardrich Limited',0,'0','Hand Dryer EconoDri Silver Metallic - Ardrich',0,0,0,1,0,0,0,7000,NULL,'Hand Dryer EconoDri Silver Metallic - Ardrich','1','9999','per Each',0,NULL,'0','Regular',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-10 04:16:48'),(265,1233067,'AR A260SP','A260SP indiv','Hand Dryer SS with Grey Trim','&#8226; FAST DRY TIME\r\n&#8226; 1.2 MM 304 STAINLESS STEEL \r\n&#8226; ANTIMICROBIAL INFUSED PLASTICS\r\n&#8226; FULLY AUTOMATIC INFRA-RED OPERATION\r\n&#8226; ENERGY EFFICIENT - VERY LOW OPERATING COST\r\n&#8226; POWERFUL AIR PERFORMANCE\r\n&#8226; SLIM UNOBTRUSIVE PROFILE\r\n&#8226; LONG LIFE MOTOR AND CARBON BRUSHES\r\n\r\nSAFE SURFACES. Our revolutionary antimicrobial infused components inhibit the growth of microbes including Staphylococcus and E.coli.\r\nComponents are manufactured from special resins using EPA approved silver ion technology that infuses plastic parts and coatings with antimicrobial properties.',593,424,'Ardrich Limited',0,'0','Hand Dryer SS with Grey Trim - Ardrich',0,0,0,1,0,0,0,7000,NULL,'Hand Dryer SS with Grey Trim - Ardrich','1','9999','per Each',0,NULL,'0','Regular',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-10 07:42:03'),(266,1233069,'AR A266W','A266W','AR Hand Dryer Velocity White SS Case','High Speed, Rapid Dry\r\n\r\n-Dries hands in seconds \r\nVelocity dries hands completely in a matter of seconds blasting a high velocity air stream onto your hands.\r\n- Lowest running costs\r\nKeep your cost to a minimum with Velocity. Velocity provides you with significantly lower costs than paper towels. \r\n-Clean and hygienic \r\nTouch-free, inlet air filtration, anti-bacterial treated plastics and no soiled paper towel litter. Velocity is the best option for health and well being.\r\n- Low impact on the environment\r\nLife Cycle Assessment Studies show that electric hand dryers are a better choice than paper based products on energy usage alone, without considering the environmental impact of the manufacture and disposal of paper',562,401,'Ardrich Limited',0,'0','Hand Dryer Velocity White SS Case - Ardrich',0,0,0,1,0,0,0,7000,NULL,'Hand Dryer Velocity White SS Case - Ardrich','1','9999','per Each',0,NULL,'0','Regular',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-16 07:18:29'),(267,1233045,'AR A290PBE','A290PBE','AR Hand Dryer Smart Dri Black','AR Hand Dryer Smart Dri Black',415,286,NULL,0,'0','Hand Dryer SmartDri Black - Ardrich',0,0,0,1,0,0,0,NULL,NULL,'Hand Dryer SmartDri Black - Ardrich',NULL,'9,999.00','Each',0,NULL,'0','Regular',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(268,900211,'AR A290PE','AR','Hand Dryer SmartDri WHITE (with grey base)','Hand Dryer SmartDri White (with grey base)',345,239,NULL,0,'0','Hand Dryer SmartDri White with Grey Base',0,0,0,1,0,0,0,NULL,NULL,'Hand Dryer SmartDri White with Grey Base',NULL,'9,999.00','Each',0,NULL,'0','Regular',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(269,1233043,'AR A290PSE','A290PSE','A290PSE Hand Dryer SmartDri Metallic Silver','A290PSE Hand Dryer SmartDri Metallic Silver',415,329,NULL,0,'0','Hand Dryer SmartDri Metallic Silver - Ardrich',0,0,0,1,0,0,0,NULL,NULL,'Hand Dryer SmartDri Metallic Silver - Ardrich',NULL,'9,999.00','Each',0,NULL,'0','Regular',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(275,2921762,'AR AC93045 indiv','AC93045 indiv','AR Air Freshener Fresh Linen Each','AR Air Freshener Fresh Linen  - 6000 sprays Each',9,4,NULL,NULL,'0','Air Freshener refill can - French Linen PRO - Aerelle',0,0,0,1,0,0,0,NULL,9,'Air Freshener refill can - French Linen PRO - Aerelle',NULL,'9,999.00','Each can',0,NULL,'0','Regular',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(277,2537695,'AR ACV93003 indiv','ACV93003 indiv','AR Veria Refill Ocean Breeze','AR Veria Refill Ocean Breeze',6,4,NULL,0,'Out Of Stock','Passive Air Freshener refill - Ocean Breeze Indiv - Veria',0,0,0,1,0,0,0,NULL,NULL,'Passive Air Freshener refill - Ocean Breeze Indiv - Veria',NULL,'8','1 x refill',0,NULL,'0','Eco-Friendly',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(279,2539030,'AR AD15610 indiv','AD15610 indiv','AR Veria Starter Kit AppleBerr','AR Veria Starter Kit Apple Berry - includes 1 x dispenser and 1 x refill',19,13,NULL,0,'0','Passive Air Freshener Starter Pack Apple Berry - Veria',0,0,0,1,0,0,0,NULL,NULL,'Passive Air Freshener Starter Pack Apple Berry - Veria',NULL,'9,999.00','1 x disp + 1 x refil',0,NULL,'0','Eco-Friendly',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(280,2539040,'AR AD15611 indiv','AD15611 indiv','AR Veria Starter Kit Ocean Breeze','AR Veria Starter Kit Ocean Breeze - includes 1 x dispenser and 1 x refill',19,13,NULL,0,'0','Passive Air Freshener Starter Pack Ocean Breeze - Veria',0,0,0,1,0,0,0,NULL,NULL,'Passive Air Freshener Starter Pack Ocean Breeze - Veria',NULL,'9,999.00','1 x disp + 1 x refil',0,NULL,'0','Eco-Friendly',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(281,2539045,'AR AD15612 indiv','AD15612 indiv','AR Veria Starter Orange Bergamot','AR Veria Starter Orange Bergamot - includes 1 x dispenser and 1 x refill',19,13,NULL,0,'0','Passive Air Freshener Starter Pack, Orange and Bergamot - Veria',0,0,0,1,0,0,0,NULL,NULL,'Passive Air Freshener Starter Pack, Orange and Bergamot - Veria',NULL,'9,999.00','1 x disp + 1 x refil',1,NULL,'0','Eco-Friendly',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(282,2539035,'AR AD15613 indiv','AD15613 indiv','AR Veria Starter Kit LemonLime','AR Veria Starter Kit Lemon Lime - includes 1 x dispenser and 1 x refill',19,13,NULL,0,'OUT OF STOCK - ETA 17/1/22','Passive Air Freshener Starter Pack Lemon Lime - Veria',0,0,0,1,0,0,0,NULL,NULL,'Passive Air Freshener Starter Pack Lemon Lime - Veria',NULL,'9,999.00','1 x disp + 1 x refil',1,NULL,'0','Eco-Friendly',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(285,1663232,'AR HAIR DRYER','HAIR DRYER','AR Hair Dryer Wall Mount Station Air 5460','AR Hair Dryer Wall Mounted Station Air 5460. White',74,51,NULL,0,'0','Hair Dryer Wall Mounted - Ardrich',0,0,0,1,0,0,0,NULL,NULL,'Hair Dryer Wall Mounted - Ardrich',NULL,'9,999.00','Each',0,NULL,'0','Regular',NULL,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(288,869241,'AR HH25709','HH25709','AR Hand Sanitiser Aerelle500ml','AR Hand Sanitiser Aerelle Alcohol based gel 500ml (500 applications per bottle)',8,5,NULL,0,'0','Hand Sanitiser - Alcohol Gel - Aerelle',0,0,1,1,0,0,0,NULL,NULL,'Hand Sanitiser - Alcohol Gel - Aerelle',NULL,'9,999.00','500ml',1,NULL,'0','Regular',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(292,2339515,'AR HH33125','HH33125','AR Hand Sanitiser Alcohol Pouch 925ml Spray Carton 6','AR Hand Sanitiser Alcohol Pouch 925ml Spray. Carton 6',119,82,NULL,0,'0','Hand Sanitiser Alcohol Spray 925ml Carton 6 - Aerelle',0,0,0,1,0,0,0,NULL,NULL,'Hand Sanitiser Alcohol Spray 925ml Carton 6 - Aerelle',NULL,'9,999.00','Carton 6',0,NULL,'0','Regular',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(293,2339514,'AR HH33140','HH33140','AR Hand Sanitiser Alcohol Gel 925ml. Carton 6','AR Hand Sanitiser Alcohol Gel 925ml pouch. Carton 6',119,82,NULL,0,'0','Hand Sanitiser Alcohol Gel 925ml Carton 6 - Aerelle',0,0,0,1,0,0,0,NULL,NULL,'Hand Sanitiser Alcohol Gel 925ml Carton 6 - Aerelle',NULL,'9,999.00','Carton 6',0,NULL,'0','Regular',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(313,2539050,'AR WH93208','WH93208','AR Aerelle Wipes no alc ctn 36','AR Aerelle Wipes Alcohol Free. Size per wipe 125 x 130mm. 200 wipes per pack. Carton of 36 packs',170,121,NULL,0,'0','Antibacterial Wipe Refills, Carton - Aerelle',0,0,0,1,0,0,0,NULL,NULL,'Antibacterial Wipe Refills, Carton - Aerelle',NULL,'9,999.00','Carton 36 packs',0,NULL,'0','Regular',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(316,2667297,'BB EC-18 indiv','EC-18 indiv','BB Calico Cotton Drawstring Bag','BB Calico Cotton Drawstring Bag',2,1,NULL,NULL,'0','Small Drawstring Bag - Ecobags',1,0,0,1,0,1,0,NULL,NULL,'Small Drawstring Bag - Ecobags',NULL,'9,999.00','Each',0,NULL,'0','Eco-Friendly',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(317,1679105,'BB EC-31 indiv','EC-31 indiv','BB String Carry Bag; Short handle','BB String Carry Bag; Short handle Each',6,4,NULL,0,'0','String Carry Bag � Short handle - Ecobags',1,0,0,1,1,0,0,NULL,NULL,'String Carry Bag � Short handle - Ecobags',NULL,'9,999.00','Each',0,NULL,'0','Eco-Friendly',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(318,1679111,'BB EC-32 indiv','EC-32 indiv','BB String Carry Bag; Long Handle','BB String Carry Bag; Long Handle Each',6,4,NULL,0,'0','String Carry Bag � Long Handle - Ecobags',1,0,0,1,1,0,0,NULL,NULL,'String Carry Bag � Long Handle - Ecobags',NULL,'9,999.00','Each',0,NULL,'0','Eco-Friendly',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(320,2668634,'BB ED-2018-H Indiv','ED-2018-H Indiv','BB Bin Liner with Handles Compostable Roll 20 460x535mm','BB Bin Liner with Handles. Compostable. Roll of 20  460x535mm',5,3,NULL,0,'0','18L Bin Liner Compostable, Roll - Ecopack',0,0,0,1,0,0,0,NULL,NULL,'18L Bin Liner Compostable, Roll - Ecopack',NULL,'9,999.00','Roll of 90',0,NULL,'0','Eco-Friendly',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(3911,1196712,'AR HH25713','HH25713','AR Hand Sanitiser Aerelle 5L','AR Hand Sanitiser Aerelle Alcohol based gel 5Litres. 70% ethyl alcohol',59,39,NULL,0,'0','Hand Sanitiser - Alcohol Gel 5Litres - Aerelle',1,0,1,1,0,0,0,NULL,NULL,'Hand Sanitiser - Alcohol Gel 5Litres - Aerelle',NULL,'9,999.00','5Litres',0,NULL,'0','Regular',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(3913,919839,'AR A15209','A15209','AR Disp Sanitiser Spray 925ml','AR Disp Sanitiser Spray 925ml',31,25,NULL,0,'0','Dispenser - Hand Sanitiser Pouch - Aerelle',0,0,1,1,0,0,0,NULL,NULL,'Dispenser - Hand Sanitiser Pouch - Aerelle',NULL,'9,999.00','Each',0,NULL,'0','Regular',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(3914,1315505,'AR A15215','A15215','AR Dispenser Sanitiser Foam','AR Dispenser Sanitiser Foam',31,25,NULL,0,'0','Dispenser for Foaming Sanitiser - Aerelle',0,0,1,1,0,0,0,NULL,NULL,'Dispenser for Foaming Sanitiser - Aerelle',NULL,'9,999.00','Each',0,NULL,'0','Regular',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(3919,548203,'AR AC93029 indiv','AC93029 indiv','AR Pest spray Airomist 150g','AR Pest/Insect spray Airomist 150g - 5000 sprays',12,8,NULL,0,'0','Pest Spray refill can - Airomist',1,0,0,1,0,0,0,NULL,NULL,'Pest Spray refill can - Airomist',NULL,'9,999.00','1 x refill',0,NULL,'0','Regular',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(3921,853105,'AR AC93205 indiv','AC93205 indiv','AR Odourban can 6000 applic','AR Odourban can - Odour neutraliser and fragrance (6000 applications per can)',11,7,NULL,0,'0','OdourBan Odour Neutraliser - refill can',1,0,0,1,0,0,0,NULL,NULL,'OdourBan Odour Neutraliser - refill can',NULL,'9,999.00','Each 180g can',0,NULL,'0','Regular',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(3924,2537685,'AR ACV93001 indiv','ACV93001 indiv','AR Veria Refill Apple Berry','AR Veria Refill Apple Berry',6,4,NULL,0,'0','Passive Air Freshener refill - Apple Berry Indiv - Veria',1,0,0,1,0,0,0,NULL,NULL,'Passive Air Freshener refill - Apple Berry Indiv - Veria',NULL,'9,999.00','1 x refill',0,NULL,'0','Eco-Friendly',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(3925,2537700,'AR ACV93007 indiv','ACV93007 indiv','AR Veria Refill Orange Bergamot','AR Veria Refill Orange Bergamot',6,4,NULL,0,'0','Passive Air Freshener refill - Orange & Bergamot Indiv - Veria',0,0,0,1,0,0,0,NULL,NULL,'Passive Air Freshener refill - Orange & Bergamot Indiv - Veria',NULL,'9,999.00','1 x refill',1,NULL,'0','Eco-Friendly',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(3926,2537690,'AR ACV93008 indiv','ACV93008 indiv','AR Veria Refill Lemon Lime','AR Veria Refill Lemon Lime',6,4,NULL,0,'0','Passive Air Freshener refill - Lemon Lime Indiv - Veria',0,0,0,1,0,0,0,NULL,NULL,'Passive Air Freshener refill - Lemon Lime Indiv - Veria',NULL,'9,999.00','1 x refill',1,NULL,'0','Eco-Friendly',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(3928,1315504,'AR HH33110','HH33110','AR Hand Sanitiser Foam 925ml','AR Hand Sanitiser Foam Alcohol free 925ml. 2300 applications per bottle',35,10,NULL,0,'0','Hand Sanitiser Alcohol Free Foaming Pouch - Aerelle',1,0,1,1,0,0,0,NULL,NULL,'Hand Sanitiser Alcohol Free Foaming Pouch - Aerelle',NULL,'9','925ml pouch',0,NULL,'0','Regular',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(3929,919842,'AR HH33115','HH33115','AR Hand Sanitiser Alcohol Free Spray 925ml','AR Hand Sanitiser Alcohol Free Spray 925ml (2300 applic per pouch)',35,9,NULL,0,'0','Hand Sanitiser Spray Pouch Alcohol Free - Aerelle',1,0,1,1,0,0,0,NULL,NULL,'Hand Sanitiser Spray Pouch Alcohol Free - Aerelle',NULL,'9,999.00','925ml pouch',0,NULL,'0','Regular',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(3931,2339507,'AR WH15467','WH15467','AR Wipes Food Probe 70% alcohol Tub 200','AR Wipes Antibacterial 70% alcohol. Food Service Probe Wipes. Tub 200',10,6,NULL,0,'0','Antibacterial Food Safety Wipes Tub 200 - Ardrich',1,0,0,1,0,0,0,NULL,NULL,'Antibacterial Food Safety Wipes Tub 200 - Ardrich',NULL,'3','Each',0,NULL,'0','Regular',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(3933,1173883,'AR WH93208 indiv','WH93208 indiv','AR Wipes Aerelle  no alc pk200','AR Wipes Sanitising Aerelle no alcohol  pk200',5,3,NULL,0,'0','Antibacterial Wipe Refills, Pouch - Aerelle',0,0,0,1,0,0,0,NULL,NULL,'Antibacterial Wipe Refills, Pouch - Aerelle',NULL,'9,999.00','Pouch 200wipes',0,NULL,'0','Regular',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(4317,928799,'ABC 04-1000/PAD','04-1000/PAD','ABC Head Pads Large 27x42cm','ABC Head Pads Large 27x42cm Carton 4x250(1000)',118,88,NULL,0,'0','Head Pads - Style Hygiene',0,0,0,1,0,0,0,NULL,NULL,'Head Pads - Style Hygiene',NULL,'9,999.00','Carton 1000',0,NULL,'0','Sustainable',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(4427,1323958,'ABC T-815008','T-815008','ABC Quilton Dispenser Box Paper Towels','ABC Quilton Dispenser Box Paper Towel. 99% lint free. 130sh per box. Carton 12 boxes',64,47,NULL,0,'0','Dispenser Box Paper Towels - Quilton',0,0,0,1,0,0,0,NULL,NULL,'Dispenser Box Paper Towels - Quilton',NULL,'9,999.00','Carton of 12 boxes',0,NULL,'0','Sustainable',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(4542,2537670,'AR ACV93001','ACV93001','AR Veria Refill Apple Berry Carton 12','AR Veria Refill Apple Berry Carton 12',61,47,NULL,0,'OUT OF STOCK - ETA 17/1/22','Passive Air Freshener refill - Apple Berry Carton - Veria',0,0,0,1,0,0,0,NULL,NULL,'Passive Air Freshener refill - Apple Berry Carton - Veria',NULL,'9,999.00','12 x refill',0,NULL,'0','Eco-Friendly',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(4543,2537680,'AR ACV93003','ACV93003','AR Veria Refill Ocean Breeze Carton 12','AR Veria Refill Ocean Breeze Carton 12',61,47,NULL,0,'Out Of Stock','Passive Air Freshener refill - Ocean Breeze Carton - Veria',0,0,0,1,0,0,0,NULL,NULL,'Passive Air Freshener refill - Ocean Breeze Carton - Veria',NULL,'0','12 x refill',0,NULL,'0','Eco-Friendly',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(4544,1360429,'AR ACV93007','ACV93007','AR Veria Refill Orange Bergamot Carton 12','AR Veria Refill Orange Bergamot Carton 12',61,47,NULL,0,'0','Passive Air Freshener refill - Orange & Bergamot Carton - Veria',0,0,0,1,0,0,0,NULL,NULL,'Passive Air Freshener refill - Orange & Bergamot Carton - Veria',NULL,'9,999.00','12 x refill',1,NULL,'0','Eco-Friendly',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(4545,1885414,'AR HH30100','HH30100','AR Handwash Lemon Lime 925ml Carton 6','AR Handwash Antibacterial Foaming Lemon Lime 925ml Carton 6',73,48,NULL,0,'0','Foaming Hand Wash Lemon Lime - Aerelle',0,0,1,1,0,0,0,NULL,NULL,'Foaming Hand Wash Lemon Lime - Aerelle',NULL,'9,999.00','Carton 6',0,NULL,'0','Regular',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(4546,1885415,'AR HH30106','HH30106','AR Handwash Fragrance Free 925ml Carton 6','AR Handwash Antibacterial Fragrance Free 925ml Carton 6',51,35,NULL,0,'0','Foaming Hand Wash Fragrance Free - Aerelle',0,0,1,1,0,0,0,NULL,NULL,'Foaming Hand Wash Fragrance Free - Aerelle',NULL,'9,999.00','Carton 6',0,NULL,'0','Regular',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(4548,1896035,'AR HH33220','HH33220','AR Hand Soap Foaming Pouch Lemon Lime (Touch Free Disp)','AR Hand Soap Antibacterial Foaming Pouch Lemon Lime  925ml (Touch Free Disp) Carton 6',71,48,NULL,0,'0','Hand Wash Foaming 925ml refill pouch Lemon Lime - Aerelle',0,0,1,1,0,0,0,NULL,NULL,'Hand Wash Foaming 925ml refill pouch Lemon Lime - Aerelle',NULL,'9,999.00','Carton 6',0,NULL,'0','Regular',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(4551,2668532,'BB BIO300','BIO300','BB Dog Waste Bags Carton 3600','BB Dog Waste Bags Carton 3600 (12 boxes of 300)',195,132,NULL,0,'Out of stock - ETA end May/beginning June','Dog Waste Bags Degradable, Carton - Earth Rated Ecobags',0,0,0,1,1,1,0,NULL,NULL,'Dog Waste Bags Degradable, Carton - Earth Rated Ecobags',NULL,'9,999.00','12 boxes 300  bags',0,NULL,'0','Eco-Friendly',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(4552,935064,'BB Comp60','Comp60','BB Dog Waste Compostable Carton','BB Dog Waste Compostable Bags. Carton  (12 boxes of 4 rolls (15 bags per roll)',124,84,NULL,0,'0','Dog Waste Bags Composable, Carton - Earth Rated Ecobags',0,0,0,1,1,1,0,NULL,NULL,'Dog Waste Bags Composable, Carton - Earth Rated Ecobags',NULL,'9,999.00','Carton 12 boxes',0,NULL,'0','Eco-Friendly',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(4554,2011033,'BB ECO-A3','ECO-A3','BB Courier Bags A3 Carton 350','BB Courier Bags A3 450mm(w) x 420mm(h). Carton 350 (14x25)',243,165,NULL,0,'0','Courier Bags Compostable A3 - Ecobags',0,0,0,1,1,1,0,NULL,NULL,'Courier Bags Compostable A3 - Ecobags',NULL,'9,999.00','Carton 350',0,NULL,'0','Eco-Friendly',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(4555,2011036,'BB ECO-A4','ECO-A4','BB Courier Bags A4 Carton 500','BB Courier Bags A4 330mm(w) x 250mm(h) Carton 500 (20x25)',148,100,NULL,0,'0','Courier Bags Compostable A4 - Ecobags',0,0,0,1,1,1,0,NULL,NULL,'Courier Bags Compostable A4 - Ecobags',NULL,'9,999.00','Carton 500',0,NULL,'0','Eco-Friendly',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(4556,2011039,'BB ECO-A5','ECO-A5','BB Courier Bags A5 Carton 500','BB Courier Bags A5 285mm(w) x 200mm(h)   Carton 500 (20x25)',118,80,NULL,0,'Out of stock - ETA 11/11/21','Courier Bags Compostable A5 - Ecobags',0,0,0,1,1,1,0,NULL,NULL,'Courier Bags Compostable A5 - Ecobags',NULL,'9,999.00','Carton 500',0,NULL,'0','Eco-Friendly',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(4558,1388917,'BB ED-2000','ED-2000','BB Kitchen Tidy Liner 8L Compost Carton 900','BB 8L Kitchen Tidy EcoBags. (300+140)x420mm. Compostable. Carton 900',109,74,NULL,0,'Out of stock - ETA December 2021','8L Bin Liner Compostable, Carton - Ecopack',1,0,0,1,1,0,0,NULL,NULL,'8L Bin Liner Compostable, Carton - Ecopack',NULL,'9,999.00','Carton 900',0,NULL,'0','Eco-Friendly',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(4559,2013387,'BB ED-2018-H','ED-2018-H','BB Bin Liner with Handles Compostable Ctn 600 460x535mm','BB Bin Liner with Handles. Compostable. Carton 600 460x535mm',118,80,NULL,0,'0','18L Bin Liner Compostable, Carton - Ecopack',0,0,0,1,0,0,0,NULL,NULL,'18L Bin Liner Compostable, Carton - Ecopack',NULL,'9,999.00','Carton 600',0,NULL,'0','Eco-Friendly',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(4562,1388904,'BB ED-2027','ED-2027','BB Kitchen Tidy Liner 27L Med Compostable Ctn','BB Kitchen Tidy Liner 27L Med Compostable Ctn 400',108,73,NULL,0,'0','27L Kitchen Tidy Liner Compostable, Carton- Ecopack',1,0,0,1,0,1,0,NULL,NULL,'27L Kitchen Tidy Liner Compostable, Carton- Ecopack',NULL,'9,999.00','Carton 400',0,NULL,'0','Eco-Friendly',NULL,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(14395,469092,'ABC DH-10000W indiv','DH-10000W indiv','ABC Napkins Dispenser White Pack 500','ABC Napkins Dispenser White Pack 500',9,5,NULL,0,'0','Dispenser Napkins',1,0,0,1,0,0,0,NULL,NULL,'Dispenser Napkins',NULL,'5','Pack 500',0,NULL,'0','Sustainable',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(14396,2699206,'ABC EC-280110/28 Indiv','EC-280110/28','ABC E/C Serviettes 80 pack','ABC E/C Serviettes 80 pack',2,1,NULL,NULL,'0','Serviettes Luncheon, 1 ply, Pack 80 - Earthcare',0,0,0,1,0,0,0,NULL,NULL,'Serviettes Luncheon, 1 ply, Pack 80 - Earthcare',NULL,'9,999.00','Pack 80',0,NULL,'0','Eco-Friendly',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(14398,1926769,'AL 3008205 indiv','3008205 indiv','AL PlixEco Small Clam Tray Pack 125','AL PlixEco Small Clam Tray Sugarcane Pack 125  - Clearance price',25,17,NULL,0,'0','Clam Tray Small Sugarcane PlixEco',1,0,0,1,1,0,0,NULL,NULL,'Clam Tray Small Sugarcane PlixEco',NULL,'16','Pack 125',0,NULL,'0','Recyclable',NULL,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(14423,2668534,'BB BIO300 indiv','BIO300 indiv','BB Dog Waste Bags 300 indiv','BB Dog Waste Bags 300 indiv',20,13,NULL,0,'0','Dog Waste Bags Degradable, Box - Earth Rated Ecobags',0,0,0,1,1,1,0,NULL,NULL,'Dog Waste Bags Degradable, Box - Earth Rated Ecobags',NULL,'9,999.00','Box 300 bags',0,NULL,'0','Eco-Friendly',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(14425,2539056,'BB COMP60 indiv','COMP60 indiv','BB Dog Waste Compostable box60','BB Dog Waste Compostable box60',13,9,NULL,0,'0','Dog Waste Bags Composable, Box - Earth Rated Ecobags',0,0,0,1,1,1,0,NULL,NULL,'Dog Waste Bags Composable, Box - Earth Rated Ecobags',NULL,'9,999.00','Box 60 bags',0,NULL,'0','Eco-Friendly',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(14426,1878110,'BB EC-04 indiv','EC-04 indiv','BB Tote with Gusset Bag','BB Tote with Gusset Bag',3,2,NULL,0,'0','Tote with Gusset Bag - Ecobags',0,0,0,1,1,1,0,NULL,NULL,'Tote with Gusset Bag - Ecobags',NULL,'9,999.00','Each',0,NULL,'0','Eco-Friendly',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(14427,1878112,'BB EC-05 BLACK indiv','EC-05 BLACK indiv','BB Promotional Bag Black','BB Promotional Bag Black',3,2,NULL,0,'0','Promotional Bag Black - Ecobags',0,0,0,1,0,1,0,NULL,NULL,'Promotional Bag Black - Ecobags',NULL,'9,999.00','Each',0,NULL,'0','Eco-Friendly',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(14428,1878111,'BB EC-05 NATURAL indiv','EC-05 NATURAL indiv','BB Promotional Bag Natural','BB Promotional Bag Natural',2,1,NULL,0,'OUT OF STOCK - ETA mid September 2022','Promotional Bag Natural - Ecobags',0,0,0,1,0,0,0,NULL,NULL,'Promotional Bag Natural - Ecobags',NULL,'9,999.00','Each',0,NULL,'0','Eco-Friendly',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(14429,1878114,'BB EC-06 BLACK indiv','EC-06 BLACK indiv','BB Large Drawstring Bag Black','BB Large Drawstring Bag Black',3,2,NULL,0,'0','Large Drawstring Bag Black - Ecobags',0,0,0,1,1,1,0,NULL,NULL,'Large Drawstring Bag Black - Ecobags',NULL,'9,999.00','Each',1,NULL,'0','Eco-Friendly',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(14430,1878113,'BB EC-06 NATURAL indiv','EC-06 NATURAL indiv','BB Large Drawstring Bag Natural','BB Large Drawstring Bag Natural',3,2,NULL,0,'0','Large Drawstring Bag Natural - Ecobags',0,0,0,1,1,1,0,NULL,NULL,'Large Drawstring Bag Natural - Ecobags',NULL,'9,999.00','Each',1,NULL,'0','Eco-Friendly',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(14431,1878116,'BB EC-15 BLACK indiv','EC-15 BLACK indiv','BB Medium Drawstring Bag Black','BB Medium Drawstring Bag Black',2,1,NULL,0,'0','Medium Drawstring Bag Black - Ecobags',0,0,0,1,0,0,0,NULL,NULL,'Medium Drawstring Bag Black - Ecobags',NULL,'9,999.00','Each',0,NULL,'0','Eco-Friendly',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(14432,1878115,'BB EC-15 NATURAL indiv','EC-15 NATURAL indiv','BB Medium Drawstring Bag Natural','BB Medium Drawstring Bag Natural',2,1,NULL,0,'0','Medium Drawstring Bag Natural - Ecobags',0,0,0,1,0,0,0,NULL,NULL,'Medium Drawstring Bag Natural - Ecobags',NULL,'9,999.00','Each',0,NULL,'0','Eco-Friendly',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(14433,1878117,'BB EC-22 indiv','EC-22 indiv','BB Calico Backpack','BB Calico Backpack',3,2,NULL,0,'0','Calico Backpack - Ecobags',0,0,0,1,0,0,0,NULL,NULL,'Calico Backpack - Ecobags',NULL,'9,999.00','Each',0,NULL,'0','Eco-Friendly',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(14434,1679112,'BB EC-33 indiv','EC-33 indiv','BB String Fresh Produce Bags; set of 2','BB String Fresh Produce Bags Pack 2',5,3,NULL,0,'0','String Fresh Produce Bags - Ecobags',1,0,0,1,1,0,0,NULL,NULL,'String Fresh Produce Bags - Ecobags',NULL,'9,999.00','Each',0,NULL,'0','Eco-Friendly',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(14435,1878120,'BB ECV-08 BLACK indiv','ECV-08 BLACK indiv','BB Promotional Black','BB Promotional Black',4,3,NULL,0,'0','Promotional Bag Black - Ecobags',0,0,0,1,0,1,0,NULL,NULL,'Promotional Bag Black - Ecobags',NULL,'9,999.00','Each',1,NULL,'0','Eco-Friendly',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(14436,1878119,'BB ECV-08 NATURAL indiv','ECV-08 NATURAL indiv','BB Promotional Natural','BB Promotional Natural',3,2,NULL,0,'0','Promotional Bag Natural - Ecobags',0,0,0,1,1,1,0,NULL,NULL,'Promotional Bag Natural - Ecobags',NULL,'9,999.00','Each',1,NULL,'0','Eco-Friendly',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(14437,1878122,'BB ECV-09','ECV-09','BB Kiwiana Fantail Shopper Bag','BB Kiwiana Fantail Shopper Bag',149,104,NULL,0,'0','Kiwiana Fantail Shopper Bag - Ecobags',0,0,0,1,1,1,0,NULL,NULL,'Kiwiana Fantail Shopper Bag - Ecobags',NULL,'9,999.00','8 pack',0,NULL,'0','Eco-Friendly',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(14438,1878125,'BB ECV-12 indiv','ECV-12 indiv','BB Canvas Sling Natural','BB Canvas Sling Natural',4,2,NULL,0,'0','Canvas Sling Natural - Ecobags',0,0,0,1,1,1,0,NULL,NULL,'Canvas Sling Natural - Ecobags',NULL,'9,999.00','Each',0,NULL,'0','Eco-Friendly',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(14440,1878123,'BB ECV-17 indiv','ECV-17 indiv','BB Good Grocer Natural','BB Good Grocer Natural',5,4,NULL,0,'0','Good Grocer Natural - Ecobags',0,0,0,1,1,1,0,NULL,NULL,'Good Grocer Natural - Ecobags',NULL,'9,999.00','Each',0,NULL,'0','Eco-Friendly',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(14441,2539059,'BB ED-2000 indiv','ED-2000 indiv','BB Kitchen Tidy Liner 8L Roll 30','BB Kitchen Tidy Liner 8L compostable Roll 30',4,3,NULL,0,'0','8L Bin Liner Compostable - Ecopack',1,0,0,1,1,0,0,NULL,NULL,'8L Bin Liner Compostable - Ecopack',NULL,'9,999.00','Roll 30 bags',0,NULL,'0','Eco-Friendly',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(16513,2537675,'AR ACV93008','ACV93008','AR Veria Refill Lemon Lime Carton 12','AR Veria Refill Lemon Lime Carton 12',61,47,NULL,0,'0','Passive Air Freshener refill - Lemon Lime Carton - Veria',0,0,0,1,0,0,0,NULL,NULL,'Passive Air Freshener refill - Lemon Lime Carton - Veria',NULL,'9,999.00','12 x refill',1,NULL,'0','Eco-Friendly',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(16514,1896036,'AR HH33221','HH33221','AR Hand Soap Foaming Pouch Fragrance Free (Touch Free Disp)','AR Hand Soap Antibacterial Foaming Pouch Fragrance Free  925ml (Touch Free Disp) Carton 6',71,48,NULL,0,'0','Hand Wash Foaming 925ml refill pouch Fragrance Free - Aerelle',1,0,1,1,0,0,0,NULL,NULL,'Hand Wash Foaming 925ml refill pouch Fragrance Free - Aerelle',NULL,'9,999.00','Carton 6',0,NULL,'0','Regular',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(17140,1121307,'ABC A-316W-N indiv','A-316W-N indiv','ABC Dinner napkins 3ply white Pack 50','ABC Dinner napkins 3ply white Pack 50',5,3,NULL,NULL,'0','Dinner Serviettes White 3ply - pack 50 - Style',0,0,0,1,0,0,0,NULL,NULL,'Dinner Serviettes White 3ply - pack 50 - Style',NULL,'9,999.00','Pack',0,NULL,'0','Sustainable',NULL,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(18027,1885416,'AR HH30103','AR HH30103','AR Foaming Hand Wash Orange - Aerelle','AR Foaming Hand Wash Orange - Aerelle',57,38,NULL,0,'0','Foaming Hand Wash Orange - Aerelle',0,0,1,1,0,0,0,NULL,NULL,'Foaming Hand Wash Orange - Aerelle',NULL,'9,999.00','Carton 6',0,NULL,'0','Regular',NULL,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(18341,1233062,'AR A260M','A260M','Hand Dryer White with Grey Trim - Ardrich','AR Hand Dryer White with Grey Trim - Ardrich',536,0,NULL,0,'0','Hand Dryer White with Grey Trim - Ardrich',0,0,0,1,0,0,0,NULL,NULL,'Hand Dryer White with Grey Trim - Ardrich',NULL,'9,999.00','Each',0,NULL,'0','Regular',NULL,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(18342,1233072,'AR A266SS','A266SS','Hand Dryer Velocity Polished SS Case - Ardrich','AR Hand Dryer Velocity Polished SS Case - Ardrich',562,0,NULL,0,'0','Hand Dryer Velocity Polished SS Case - Ardrich',0,0,0,1,0,0,0,NULL,NULL,'Hand Dryer Velocity Polished SS Case - Ardrich',NULL,'9,999.00','Each',0,NULL,'0','Regular',NULL,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(18343,1196611,'AR AC93205','AC93205','OdourBan Air Freshener - Carton','AR OdourBan Air Freshener - Carton',121,87,NULL,0,'0','OdourBan Odour Neutraliser & Air Freshener - Carton',1,0,0,1,0,0,0,NULL,NULL,'OdourBan Odour Neutraliser & Air Freshener - Carton',NULL,'9,999.00','12 x 180g cans',0,NULL,'0','Regular',NULL,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(18848,1360434,'AR AD15600W','AR AD15600W','AR Veria Dispenser White Carton 12','AR Veria Dispenser White Carton 12',80,62,NULL,0,'0','Passive Air Freshener dispensers White - Veria',0,0,0,1,0,0,0,NULL,NULL,'Passive Air Freshener dispensers White - Veria',NULL,'9,999.00','12 dispensers',0,NULL,'0','Recyclable',NULL,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(18849,2586114,'AR AD15600B','AD15600B','AR Veria Dispenser Black Carton 12','AR Veria Dispenser Black Carton 12',80,62,NULL,0,'0','Passive Air Freshener dispensers Black - Veria',0,0,0,1,0,0,0,NULL,NULL,'Passive Air Freshener dispensers Black - Veria',NULL,'9,999.00','12 dispensers',0,NULL,'0','Recyclable',NULL,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(18923,2639419,'BB ECO-DLE','ECO-DLE','BB Courier Bags DLE Carton 500','BB Courier Bags Compostable DLE Carton 500',96,65,NULL,0,'0','Courier Bags Compostable DLE - Ecobags',0,0,0,1,0,0,0,NULL,NULL,'Courier Bags Compostable DLE - Ecobags',NULL,'9,999.00','Carton 500',0,NULL,'0','Eco-Friendly',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(18924,2639442,'BB ECO-FOOLSCAPE','ECO-FOOLSCAPE','BB Courier Bags Foolscape Carton 500','BB Courier Bags Compostable Foolscape 280x380 (70mm flap) Carton 500',207,140,NULL,0,'0','Courier Bags Compostable DLE - Ecobags',0,0,0,1,0,0,0,NULL,NULL,'Courier Bags Compostable DLE - Ecobags',NULL,'9,999.00','Carton 500',0,NULL,'0','Eco-Friendly',0,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(18943,2647544,'BB ED-1007','ED-1007','BB Bamboo Cloths Dispenser Box Carton 12 boxes of 10','BB Bamboo Cloths Dispenser Box. Biodegradable, Washable, Reusable. Carton 12 Boxes of 10',62,42,NULL,NULL,'0','Bamboo Cloths Dispenser Box - Ecobags',0,0,0,1,0,0,0,NULL,NULL,'Bamboo Cloths Dispenser Box - Ecobags',NULL,'9,999.00','Carton 12boxes',0,NULL,'0','Eco-Friendly',NULL,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(19324,2703916,'AR HH25716','HH25716','AR Hand Sanitiser Alcohol 250ml Spray Carton 25','AR Hand Sanitiser Alcohol Based 250ml Spray Carton 25',190,127,NULL,NULL,'0','Hand Sanitiser Alcohol 250ml Spray Carton 25',0,0,0,1,0,0,0,NULL,NULL,'Hand Sanitiser Alcohol 250ml Spray Carton 25',NULL,'9,999.00','Carton 25',0,NULL,'0','Regular',NULL,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(19367,2711687,'AR AC93029','AC93029','AR Pest spray Airomist 150g Carton 12','AR Pest spray Airomist 150g Carton 12',126,93,NULL,NULL,'0','Pest Spray refill can Carton 12 - Airomist',1,0,0,1,1,0,0,NULL,NULL,'Pest Spray refill can Carton 12 - Airomist',NULL,'9,999.00','Carton 12',0,NULL,'0','Recyclable',NULL,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(19535,2753744,'BB ED-1199','ED-1199','BB Bamboo cloths multi-purpose carton 6 rolls','BB Bamboo cloths multi-purpose  6 rolls, 20 cloths per roll.',49,33,NULL,NULL,'0','Bamboo Cloths Multi-Purpose Rolls - Ecobags',1,0,0,1,1,0,0,NULL,NULL,'Bamboo Cloths Multi-Purpose Rolls - Ecobags',NULL,'9,999.00','Carton 6 rolls',0,NULL,'0','Eco-Friendly',NULL,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(19567,2769980,'BB ED-1111 indiv','ED-1111 indiv','BB Cling Wrap Compostable Mega Roll 300m','BB Cling Wrap Compostable Mega 300m x 450mm Roll',78,50,NULL,NULL,'0','Cling Wrap Home Compostable 300m x 450mm - Ecopack',1,0,0,1,1,0,0,NULL,NULL,'Cling Wrap Home Compostable 300m x 450mm - Ecopack',NULL,'9,999.00','Roll',0,NULL,'0','Eco-Friendly',NULL,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(19568,2769983,'BB ED-1111','ED-1111','BB Cling Wrap Compostable Mega Carton 4','BB Cling Wrap Compostable Mega 300m x 450mm Carton 4 rolls',252,170,NULL,NULL,'0','Cling Wrap Home Compostable 300m x 450mm Carton 4 - Ecopack',1,0,0,1,1,0,0,NULL,NULL,'Cling Wrap Home Compostable 300m x 450mm Carton 4 - Ecopack',NULL,'9,999.00','Carton 4',0,NULL,'0','Eco-Friendly',NULL,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(20952,2872631,'BB ED-1003','ED-1003','BB Cling Wrap Compostable 30m Roll Carton 12','BB Cling Wrap Compostable 30m Roll Carton 12',79,53,NULL,NULL,'0','Cling Wrap Compostable Carton 12 rolls - Ecobags',1,0,0,1,0,0,0,NULL,NULL,'Cling Wrap Compostable Carton 12 rolls - Ecobags',NULL,'9,999.00','Carton 12',0,NULL,'0','Eco-Friendly',NULL,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(21515,3083155,'AR AC93051 indiv','AC93051 indiv','AR Air Freshener Refill Can - Berry','AR Air Freshener individual refill cans - Berry',9,1,NULL,NULL,'0','Air Freshener refill cans - Berry - Airomist Pro',0,0,0,1,0,0,0,NULL,11,'Air Freshener refill cans - Berry - Airomist Pro',NULL,NULL,'275ml can',0,NULL,'0','Air Freshener',NULL,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(21516,3083157,'AR AC94518','AC94518','AR Air Freshener refill cans - Berry Carton','AR Air Freshener refill cans - Berry. Carton 12 - Airomist Pro',97,51,NULL,0,'0','Air Freshener refill cans - BERRY Carton 12 - Airomist Pro',0,0,0,1,0,0,0,NULL,NULL,'Air Freshener refill cans - BERRY Carton 12 - Airomist Pro',NULL,'9,999.00','Carton 12',0,NULL,'0','Regular',NULL,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(21517,3083159,'AR AC94516','AC94516','AR Air Freshener refill cans - Coco Mango Carton','AR Air Freshener refill cans - Coco Mango. Carton 12 - Airomist Pro',97,51,NULL,0,'0','Air Freshener refill cans - COCO MANGO Carton - Airomist Pro',0,0,0,1,0,0,0,NULL,NULL,'Air Freshener refill cans - COCO MANGO Carton - Airomist Pro',NULL,'9,999.00','Carton 12',0,NULL,'0','Recyclable',NULL,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(21518,3083160,'AR AC94517','AC94517','AR Air Freshener refill cans - Fresh Apple Carton','AR Air Freshener refill cans - Fresh Apple. Carton 12 - Airomist Pro',97,51,NULL,0,'0','Air Freshener refill cans - FRESH APPLE Carton - Airomist Pro',0,0,0,1,0,0,0,NULL,NULL,'Air Freshener refill cans - FRESH APPLE Carton - Airomist Pro',NULL,'9,999.00','Carton 12',0,NULL,'0','Regular',NULL,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(21519,3083161,'AR AC94520','AC94520','AR Air Freshener refill cans - Lavender Fabuloso. Carton','AR Air Freshener refill cans - Lavender Fabuloso. Carton 12 - Airomist Pro',97,51,NULL,0,'0','Air Freshener refill cans - LAVENDER FABULOSO Carton - Airomist Pro',0,0,0,1,0,0,0,NULL,NULL,'Air Freshener refill cans - LAVENDER FABULOSO Carton - Airomist Pro',NULL,'9,999.00','Carton 12',0,NULL,'0','Regular',NULL,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(21520,3083200,'AR AC94511','AC94511','AR Air Freshener refill cans - Apple Berry Carton','AR Air Freshener refill cans - Apple Berry Carton 12 - Airomist Pro',97,51,NULL,0,'0','Air Freshener refill cans - APPLE BERRY Carton - Airomist Pro',0,0,0,1,0,0,0,NULL,NULL,'Air Freshener refill cans - APPLE BERRY Carton - Airomist Pro',NULL,'9,999.00','Carton 12',0,NULL,'0','Recyclable',NULL,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(21521,3083203,'AR AC94512','AC94512','AR Air Freshener refill cans - Fresh Linen Carton','AR Air Freshener refill cans - Fresh Linen Carton 12 - Airomist Pro',97,51,NULL,0,'0','Air Freshener refill cans - FRESH LINEN Carton - Airomist Pro',0,0,0,1,0,0,0,NULL,NULL,'Air Freshener refill cans - FRESH LINEN Carton - Airomist Pro',NULL,'9,999.00','Carton 12',0,NULL,'0','Recyclable',NULL,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(21522,3083205,'AR AC94515','AC94515','AR Air Freshener refill cans - Apple Mango Tango Carton','AR Air Freshener refill cans - Apple Mango Tango Carton 12 - Airomist Pro',97,51,NULL,0,'0','Air Freshener refill cans - APPLE MANGO TANGO  Carton - Airomist Pro',0,0,0,1,0,0,0,NULL,NULL,'Air Freshener refill cans - APPLE MANGO TANGO  Carton - Airomist Pro',NULL,'9,999.00','Carton 12',0,NULL,'0','Recyclable',NULL,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(21523,3083208,'AR AC94521','AC94521','AR Air Freshener refill cans - Plumeria Carton','AR Air Freshener refill cans - Plumeria Carton 12 - Airomist Pro',97,51,NULL,0,'0','Air Freshener refill cans - PLUMERIA Carton - Airomist Pro',0,0,0,1,0,0,0,NULL,NULL,'Air Freshener refill cans - PLUMERIA Carton - Airomist Pro',NULL,'9,999.00','Carton 12',0,NULL,'0','Recyclable',NULL,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(21524,3083220,'AR AC94517 indiv','AC94517 indiv','AR Air Freshener refill can - Fresh Apple','AR Air Freshener refill can - Fresh Apple Can Airomist Pro',9,4,NULL,NULL,'0','Air Freshener refill cans - FRESH APPLE - Airomist Pro',0,0,0,1,0,0,0,NULL,NULL,'Air Freshener refill cans - FRESH APPLE - Airomist Pro',NULL,'9,999.00','Each 275ml can',0,NULL,'0','Recyclable',NULL,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46'),(21525,3083225,'AR AC94520 indiv','AC94520 indiv','AR Air Freshener refill can - Lavender Fabuloso','AR Air Freshener refill can - Lavender Fabuloso Can Airomist Pro',9,4,NULL,NULL,'0','Air Freshener refill cans - LAVENDER FABULOSO - Airomist Pro',0,0,0,1,0,0,0,NULL,NULL,'Air Freshener refill cans - LAVENDER FABULOSO - Airomist Pro',NULL,'9,999.00','Each 275ml can',0,NULL,'0','Recyclable',NULL,NULL,NULL,'2022-12-09 15:12:46','2022-12-09 15:12:46');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessions` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint unsigned DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci,
  `payload` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sessions_user_id_index` (`user_id`),
  KEY `sessions_last_activity_index` (`last_activity`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES ('yvQuSJKzoTy5fXiXvJmPFQV4l3jefVRRhdKSUpG9',1,'127.0.0.1','Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:107.0) Gecko/20100101 Firefox/107.0','YTo1OntzOjY6Il90b2tlbiI7czo0MDoiMjRSaFVIR0tVcUplOFNBWjhaRUpScG4yaVNJMHROS1hiSkdNcU9jbyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDA6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hZG1pbi9uZXcvcHJvZHVjdHMiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX1zOjM6InVybCI7YTowOnt9czo1MjoibG9naW5fYWRtaW5fNTliYTM2YWRkYzJiMmY5NDAxNTgwZjAxNGM3ZjU4ZWE0ZTMwOTg5ZCI7aToxO30=',1671235380);
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `suppliers`
--

DROP TABLE IF EXISTS `suppliers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `suppliers` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address_1` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address_2` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `post_code` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contact` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `suppliers_code_unique` (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `suppliers`
--

LOCK TABLES `suppliers` WRITE;
/*!40000 ALTER TABLE `suppliers` DISABLE KEYS */;
/*!40000 ALTER TABLE `suppliers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `two_factor_secret` text COLLATE utf8mb4_unicode_ci,
  `two_factor_recovery_codes` text COLLATE utf8mb4_unicode_ci,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `current_team_id` bigint unsigned DEFAULT NULL,
  `profile_photo_path` text COLLATE utf8mb4_unicode_ci,
  `address_1` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address_2` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `suburb` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `post_code` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `website_ids`
--

DROP TABLE IF EXISTS `website_ids`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `website_ids` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `internal_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cafe_supplies` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `car_cleaning` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hand_sanitiser` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `insinc_products` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `packnet` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `rubbish_bags` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `disposable_gloves` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `website_ids_name_unique` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `website_ids`
--

LOCK TABLES `website_ids` WRITE;
/*!40000 ALTER TABLE `website_ids` DISABLE KEYS */;
/*!40000 ALTER TABLE `website_ids` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-18  8:28:23