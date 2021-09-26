-- MySQL dump 10.13  Distrib 8.0.26, for macos11 (arm64)
--
-- Host: localhost    Database: groupomania_OC
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Comments`
--

DROP TABLE IF EXISTS `Comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `auteur` varchar(255) NOT NULL,
  `content` varchar(255) DEFAULT NULL,
  `userId` int DEFAULT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` datetime NOT NULL,
  `PostId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `PostId` (`PostId`),
  CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`PostId`) REFERENCES `Posts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Comments`
--

LOCK TABLES `Comments` WRITE;
/*!40000 ALTER TABLE `Comments` DISABLE KEYS */;
INSERT INTO `Comments` VALUES (1,'nicolas dass','il est super ! 😀',2,'2021-09-26','2021-09-26 17:36:25',1),(2,'jenny gd','tu pars où?? ',3,'2021-09-26','2021-09-26 17:37:42',2);
/*!40000 ALTER TABLE `Comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Likes`
--

DROP TABLE IF EXISTS `Likes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Likes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `postId` int NOT NULL,
  `userId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Likes`
--

LOCK TABLES `Likes` WRITE;
/*!40000 ALTER TABLE `Likes` DISABLE KEYS */;
INSERT INTO `Likes` VALUES (1,1,1,'2021-09-26 17:35:56','2021-09-26 17:35:56'),(2,1,2,'2021-09-26 17:36:13','2021-09-26 17:36:13'),(3,2,2,'2021-09-26 17:36:50','2021-09-26 17:36:50'),(4,1,3,'2021-09-26 17:37:06','2021-09-26 17:37:06'),(5,3,3,'2021-09-26 17:38:28','2021-09-26 17:38:28'),(6,4,4,'2021-09-26 17:39:53','2021-09-26 17:39:53'),(7,1,4,'2021-09-26 17:39:56','2021-09-26 17:39:56'),(8,2,4,'2021-09-26 17:39:58','2021-09-26 17:39:58'),(9,1,5,'2021-09-26 17:41:07','2021-09-26 17:41:07');
/*!40000 ALTER TABLE `Likes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Posts`
--

DROP TABLE IF EXISTS `Posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(255) NOT NULL,
  `attachement` varchar(255) NOT NULL,
  `nbrComment` int DEFAULT NULL,
  `nbrLike` int DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `UserId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `UserId` (`UserId`),
  CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `Users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Posts`
--

LOCK TABLES `Posts` WRITE;
/*!40000 ALTER TABLE `Posts` DISABLE KEYS */;
INSERT INTO `Posts` VALUES (1,'j\'adore ce manga !','http://localhost:3000/images/200.gif1632677753904.gif',NULL,5,'2021-09-26 17:35:53','2021-09-26 17:41:07',1),(2,'Vivement les vacances 😎','http://localhost:3000/images/10598256.jpeg1632677807975.jpg',NULL,2,'2021-09-26 17:36:47','2021-09-26 17:39:58',2),(3,'Quand on est vendredi 😜','http://localhost:3000/images/Smiling_Leo_Perfect_GIF.gif1632677907299.gif',NULL,1,'2021-09-26 17:38:27','2021-09-26 17:38:28',3),(4,'pas mal le gâteau de jerem !','http://localhost:3000/images/gateau-d-anniversaire.jpeg1632677992359.jpg',NULL,1,'2021-09-26 17:39:52','2021-09-26 17:39:53',4),(5,'je suis fan !','http://localhost:3000/images/valorant-riot-games-640x359.jpeg1632678050580.jpg',NULL,0,'2021-09-26 17:40:50','2021-09-26 17:40:50',5);
/*!40000 ALTER TABLE `Posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `isAdmin` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,'jeremy@gmail.com','dassonville','jérémy','$2a$10$08GiNt.wAf.UzGjLnCHTg.43VNmnzAjqjUyCvpt0k8bX/sCldHzdm',0,'2021-09-26 17:34:51','2021-09-26 17:34:51'),(2,'nicolas@gmail.com','dass','nicolas','$2a$10$CfBFn2WF7Mf5gSVEBDe1EOEF.KKAogO8H6rdMq/qV2arWf9GlBnRm',0,'2021-09-26 17:36:10','2021-09-26 17:36:10'),(3,'jenny@gmail.com','gd','jenny','$2a$10$dhjH9cn4XG/DgHQA4uBdYe8An6HhR2.jQKKG5cqmIkxYAJzdRUhGG',0,'2021-09-26 17:37:03','2021-09-26 17:37:03'),(4,'charly@gmail.com','gde','charly','$2a$10$txehNt9ga90C73dh/v4Eie/9cBeNwmjrCeXemuefiwoDQy8Vhjc8q',0,'2021-09-26 17:38:56','2021-09-26 17:38:56'),(5,'aaron@gmail.com','dasg','aaron','$2a$10$a7DD68UBm9nibFkMazTbI.phvdREG4wvDi8gA3MO/8JmKmafPvwqW',0,'2021-09-26 17:40:13','2021-09-26 17:40:13'),(6,'admin@admin','admin','admin','$2a$10$fQMoMXozmEbpbhKfajeO8.1Zh7FwliqsyCSjPg.x8JVor49z2UbKS',1,'2021-09-26 17:41:29','2021-09-26 17:41:29');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-26 19:43:18
