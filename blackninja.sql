-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-07-2021 a las 05:55:22
-- Versión del servidor: 10.4.19-MariaDB
-- Versión de PHP: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `blackninja`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `identificador` int(50) NOT NULL,
  `primer_nombre` text NOT NULL,
  `foto` text NOT NULL,
  `nivel1` text NOT NULL,
  `puntaje_nivel1` int(11) NOT NULL,
  `nivel2` text NOT NULL,
  `puntaje_nivel2` int(11) NOT NULL,
  `nivel3` text NOT NULL,
  `puntaje_nivel3` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `identificador`, `primer_nombre`, `foto`, `nivel1`, `puntaje_nivel1`, `nivel2`, `puntaje_nivel2`, `nivel3`, `puntaje_nivel3`) VALUES
(1, 22222, 'julio', 'views/img/intro/julio.png', 'ok', 200, 'ok', 150, 'ok', 330),
(2, 1111, 'Maria', 'views/img/intro/maria.png', 'ok', 345, 'ok', 340, 'ok', 0),
(3, 3333, 'juan', 'views/img/intro/juan.png', 'ok', 120, 'ok', 500, 'ok', 0),
(4, 3334, 'enrique', 'views/img/intro/enrique.png', 'ok', 0, '', 0, '', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
