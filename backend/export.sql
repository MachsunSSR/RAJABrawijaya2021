-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 12, 2021 at 06:24 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Database: `db_rajabrawijaya_2021`
--
CREATE DATABASE IF NOT EXISTS `db_rajabrawijaya_2021` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `db_rajabrawijaya_2021`;

-- --------------------------------------------------------

--
-- Table structure for table `access`
--

CREATE TABLE `access` (
  `id` int(11) NOT NULL,
  `access` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `access_mahasiswa`
--

CREATE TABLE `access_mahasiswa` (
  `nim` varchar(255) CHARACTER SET utf8mb4 DEFAULT NULL,
  `access_id` int(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `mahasiswa`
--

CREATE TABLE `mahasiswa` (
  `nim` varchar(255) NOT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `fakultas` varchar(255) DEFAULT NULL,
  `jurusan` varchar(255) DEFAULT NULL,
  `prodi` varchar(255) DEFAULT NULL,
  `jenjang` varchar(255) DEFAULT NULL,
  `foto` varchar(255) DEFAULT NULL,
  `cluster` varchar(255) DEFAULT NULL,
  `kelompok` varchar(255) DEFAULT NULL,
  `sosmed` varchar(255) DEFAULT NULL,
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `penugasan`
--

CREATE TABLE `penugasan` (
  `nim` varchar(255) DEFAULT NULL,
  `status_pilgan` tinyint(1) DEFAULT 0,
  `nilai_pilgan` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `pointer`
--

CREATE TABLE `pointer` (
  `id` int(11) NOT NULL DEFAULT 1,
  `pointer_mahasiswa` int(11) DEFAULT NULL,
  `pointer_kelompok` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `access`
--
ALTER TABLE `access`
  ADD PRIMARY KEY (`id`),
  ADD KEY `access` (`access`);

--
-- Indexes for table `access_mahasiswa`
--
ALTER TABLE `access_mahasiswa`
  ADD KEY `nim` (`nim`),
  ADD KEY `access_id` (`access_id`);

--
-- Indexes for table `mahasiswa`
--
ALTER TABLE `mahasiswa`
  ADD PRIMARY KEY (`nim`);

--
-- Indexes for table `penugasan`
--
ALTER TABLE `penugasan`
  ADD KEY `nim` (`nim`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `access`
--
ALTER TABLE `access`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `access_mahasiswa`
--
ALTER TABLE `access_mahasiswa`
  ADD CONSTRAINT `access_mahasiswa_ibfk_1` FOREIGN KEY (`access_id`) REFERENCES `access` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `access_mahasiswa_ibfk_2` FOREIGN KEY (`nim`) REFERENCES `mahasiswa` (`nim`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `penugasan`
--
ALTER TABLE `penugasan`
  ADD CONSTRAINT `penugasan_ibfk_1` FOREIGN KEY (`nim`) REFERENCES `mahasiswa` (`nim`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;
