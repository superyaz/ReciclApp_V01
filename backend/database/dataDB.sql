use reciclapp;

-- INGRESANDO TIPOS DE USUARIO =>
-- TIPOS DE USUARIOS =>
INSERT INTO `roles` (`id`, `rolName`, `created_at`) VALUES (NULL, 'Usuario', CURRENT_TIMESTAMP),(NULL, 'Administrador', CURRENT_TIMESTAMP), (NULL, 'Recolector', CURRENT_TIMESTAMP);
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

-- INGRESANDO TIPOS DE DOCUMENTOS DE IDENTIDAD =>
-- TYPE DOCUMENTS =>
INSERT INTO `documents` (`id`, `typeDocument`, `created_at`) VALUES (NULL, 'Tarjeta De Identidad', CURRENT_TIMESTAMP),(NULL, 'Cedula De Ciudadania', CURRENT_TIMESTAMP), (NULL, 'Cedula De Extranjeria', CURRENT_TIMESTAMP),(NULL, 'Pasaporte', CURRENT_TIMESTAMP);
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

-- INGRESANDO TIPOS DE VIVIENDA =>
-- TIPOS DE VIVIENDA =>
INSERT INTO `houses` (`id`, `typeHouse`, `created_at`) VALUES (NULL, 'Hogar', CURRENT_TIMESTAMP),(NULL, 'Oficina', CURRENT_TIMESTAMP), (NULL, 'Empresa', CURRENT_TIMESTAMP);
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

-- INGRESANDO TIPOS DE MATERIAL =>
-- TIPOS DE MATERIAL =>
INSERT INTO `typeMaterial` (`id`, `typeMaterial`, `created_at`) VALUES (NULL, 'Carton', CURRENT_TIMESTAMP),(NULL, 'Papel', CURRENT_TIMESTAMP), (NULL, 'Plastico', CURRENT_TIMESTAMP), (NULL, 'Vidrio', CURRENT_TIMESTAMP), (NULL, 'Electronico', CURRENT_TIMESTAMP);
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

-- INGRESANDO LOS BARRIOS => 
-- COMUNA #1
INSERT INTO `neighborhoods` (`id`, `neighborhood`, `created_at`) VALUES (NULL, 'Aldea Pablo VI', CURRENT_TIMESTAMP),(NULL, 'Carpinelo', CURRENT_TIMESTAMP), (NULL, 'El Compromiso', CURRENT_TIMESTAMP),(NULL, 'Granizal', CURRENT_TIMESTAMP),(NULL, 'La Avanzada', CURRENT_TIMESTAMP),(NULL, 'La Esperanza Nº 2', CURRENT_TIMESTAMP),(NULL, 'Moscú Nº 2', CURRENT_TIMESTAMP),(NULL, 'Popular Nº 1', CURRENT_TIMESTAMP),(NULL, 'Popular Nº 2', CURRENT_TIMESTAMP),(NULL, 'Santo Domingo Savio Nº 1', CURRENT_TIMESTAMP),(NULL, 'Santo Domingo Savio Nº 2', CURRENT_TIMESTAMP),(NULL, 'San Pablo', CURRENT_TIMESTAMP),(NULL, 'Villa Guadalupe', CURRENT_TIMESTAMP);

-- COMUNA #2
INSERT INTO `neighborhoods` (`id`, `neighborhood`, `created_at`) VALUES (NULL, 'Santa Cruz', CURRENT_TIMESTAMP),(NULL, 'La Isla', CURRENT_TIMESTAMP), (NULL, 'El Playón de Los Comuneros', CURRENT_TIMESTAMP),(NULL, 'Pablo VI', CURRENT_TIMESTAMP),(NULL, 'La Frontera', CURRENT_TIMESTAMP),(NULL, 'La Francia', CURRENT_TIMESTAMP),(NULL, 'Andalucía', CURRENT_TIMESTAMP),(NULL, 'Villa del Socorro', CURRENT_TIMESTAMP),(NULL, 'Villa Niza', CURRENT_TIMESTAMP),(NULL, 'Moscú Nº 1', CURRENT_TIMESTAMP),(NULL, 'La Rosa', CURRENT_TIMESTAMP);

-- COMUNA #3
INSERT INTO `neighborhoods` (`id`, `neighborhood`, `created_at`) VALUES (NULL, 'La Salle', CURRENT_TIMESTAMP),(NULL, 'Las Granjas', CURRENT_TIMESTAMP), (NULL, 'Campo Valdes Nº 2', CURRENT_TIMESTAMP),(NULL, 'Santa Inés', CURRENT_TIMESTAMP),(NULL, 'El Raizal', CURRENT_TIMESTAMP),(NULL, 'El Pomar', CURRENT_TIMESTAMP),(NULL, 'Manrique Central Nº 2', CURRENT_TIMESTAMP),(NULL, 'Manrique Oriental', CURRENT_TIMESTAMP),(NULL, 'Versalles Nº 1', CURRENT_TIMESTAMP),(NULL, 'Versalles Nº 2', CURRENT_TIMESTAMP),(NULL, 'La Cruz', CURRENT_TIMESTAMP),(NULL, 'La Honda', CURRENT_TIMESTAMP),(NULL, 'Oriente', CURRENT_TIMESTAMP),(NULL, 'Maria Cano - Carambola', CURRENT_TIMESTAMP),(NULL, 'San José La Cima Nº 1', CURRENT_TIMESTAMP),(NULL, 'San José La Cima Nº 2', CURRENT_TIMESTAMP);

-- COMUNA #4
INSERT INTO `neighborhoods` (`id`, `neighborhood`, `created_at`) VALUES (NULL, 'Aranjuez', CURRENT_TIMESTAMP),(NULL, 'Berlín', CURRENT_TIMESTAMP), (NULL, 'San Isidro', CURRENT_TIMESTAMP),(NULL, 'Palermo', CURRENT_TIMESTAMP),(NULL, 'Bermejal - Los Álamos', CURRENT_TIMESTAMP),(NULL, 'Moravia', CURRENT_TIMESTAMP),(NULL, 'Sevilla', CURRENT_TIMESTAMP),(NULL, 'San Pedro', CURRENT_TIMESTAMP),(NULL, 'Manrique Central Nº 1', CURRENT_TIMESTAMP),(NULL, 'Campo Valdes Nº 1', CURRENT_TIMESTAMP),(NULL, 'Las Esmeraldas', CURRENT_TIMESTAMP),(NULL, 'La Piñuela', CURRENT_TIMESTAMP),(NULL, 'Brasilia', CURRENT_TIMESTAMP),(NULL, 'Miranda', CURRENT_TIMESTAMP);

-- COMUNA #5
INSERT INTO `neighborhoods` (`id`, `neighborhood`, `created_at`) VALUES (NULL, 'Castilla', CURRENT_TIMESTAMP),(NULL, 'Toscana', CURRENT_TIMESTAMP), (NULL, 'Héctor Abad Gómez', CURRENT_TIMESTAMP),(NULL, 'La Paralela', CURRENT_TIMESTAMP),(NULL, 'Las Brisas', CURRENT_TIMESTAMP),(NULL, 'Florencia', CURRENT_TIMESTAMP),(NULL, 'Tejelo', CURRENT_TIMESTAMP),(NULL, 'Boyacá', CURRENT_TIMESTAMP),(NULL, 'Belalcazar', CURRENT_TIMESTAMP),(NULL, 'Girardot', CURRENT_TIMESTAMP),(NULL, 'Tricentenario', CURRENT_TIMESTAMP),(NULL, 'Francisco Antonio Zea', CURRENT_TIMESTAMP),(NULL, 'Alfonso López', CURRENT_TIMESTAMP),(NULL, 'Caribe', CURRENT_TIMESTAMP),(NULL, 'El Progreso', CURRENT_TIMESTAMP);

-- COMUNA #6
INSERT INTO `neighborhoods` (`id`, `neighborhood`, `created_at`) VALUES (NULL, 'Doce de Octubre Nº 1', CURRENT_TIMESTAMP),(NULL, 'Doce de Octubre Nº 2', CURRENT_TIMESTAMP), (NULL, 'Santander', CURRENT_TIMESTAMP),(NULL, 'Pedregal', CURRENT_TIMESTAMP),(NULL, 'La Esperanza', CURRENT_TIMESTAMP),(NULL, 'San Martín de Porres', CURRENT_TIMESTAMP),(NULL, 'Kennedy', CURRENT_TIMESTAMP),(NULL, 'Picacho', CURRENT_TIMESTAMP),(NULL, 'Picachito', CURRENT_TIMESTAMP),(NULL, 'Mirador del Doce', CURRENT_TIMESTAMP),(NULL, 'El Progreso Nº 2', CURRENT_TIMESTAMP),(NULL, 'El Triunfo', CURRENT_TIMESTAMP);

-- COMUNA #7
INSERT INTO `neighborhoods` (`id`, `neighborhood`, `created_at`) VALUES (NULL, 'Robledo', CURRENT_TIMESTAMP),(NULL, 'El Volador', CURRENT_TIMESTAMP), (NULL, 'San Germán', CURRENT_TIMESTAMP),(NULL, 'Barrio Facultad de Minas', CURRENT_TIMESTAMP),(NULL, 'La Pilarica', CURRENT_TIMESTAMP),(NULL, 'Bosques de San Pablo', CURRENT_TIMESTAMP),(NULL, 'Altamira', CURRENT_TIMESTAMP),(NULL, 'Córdoba', CURRENT_TIMESTAMP),(NULL, 'López de Mesa', CURRENT_TIMESTAMP),(NULL, 'El Diamante Robledo', CURRENT_TIMESTAMP),(NULL, 'Aures Nº 1', CURRENT_TIMESTAMP),(NULL, 'Aures Nº 2', CURRENT_TIMESTAMP),(NULL, 'Bello Horizonte', CURRENT_TIMESTAMP),(NULL, 'Villa Flora', CURRENT_TIMESTAMP),(NULL, 'Palenque', CURRENT_TIMESTAMP),(NULL, 'Cucaracho', CURRENT_TIMESTAMP),(NULL, 'Fuente Clara', CURRENT_TIMESTAMP),(NULL, 'Santa Margarita', CURRENT_TIMESTAMP),(NULL, 'Olaya Herrera', CURRENT_TIMESTAMP),(NULL, 'Pajarito', CURRENT_TIMESTAMP),(NULL, 'Monteclaro', CURRENT_TIMESTAMP),(NULL, 'Villa de La Iguaná', CURRENT_TIMESTAMP),(NULL, 'La Cuchilla', CURRENT_TIMESTAMP),(NULL, 'La Aurora', CURRENT_TIMESTAMP),(NULL, 'La Campiña', CURRENT_TIMESTAMP);

-- COMUNA #8
INSERT INTO `neighborhoods` (`id`, `neighborhood`, `created_at`) VALUES (NULL, 'Villa Hermosa', CURRENT_TIMESTAMP),(NULL, 'La Mansión', CURRENT_TIMESTAMP), (NULL, 'San Miguel', CURRENT_TIMESTAMP),(NULL, 'La Ladera', CURRENT_TIMESTAMP),(NULL, 'Golondrinas', CURRENT_TIMESTAMP),(NULL, 'Batallón Girardot', CURRENT_TIMESTAMP),(NULL, 'Llanaditas', CURRENT_TIMESTAMP),(NULL, 'Los Mangos', CURRENT_TIMESTAMP),(NULL, 'Tres esquinas', CURRENT_TIMESTAMP),(NULL, 'Sucre', CURRENT_TIMESTAMP),(NULL, 'El Pinal', CURRENT_TIMESTAMP),(NULL, 'Trece de Noviembre', CURRENT_TIMESTAMP),(NULL, 'La Libertad', CURRENT_TIMESTAMP),(NULL, 'Villatina', CURRENT_TIMESTAMP),(NULL, 'San Antonio', CURRENT_TIMESTAMP),(NULL, 'Las Estancias', CURRENT_TIMESTAMP),(NULL, 'Villa Turbay', CURRENT_TIMESTAMP),(NULL, 'La Sierra', CURRENT_TIMESTAMP),(NULL, 'Villa Lilliam', CURRENT_TIMESTAMP),(NULL, 'Esfuerzos de Paz Nº 1', CURRENT_TIMESTAMP),(NULL, 'Esfuerzos de Paz Nº 2', CURRENT_TIMESTAMP);

-- COMUNA #9
INSERT INTO `neighborhoods` (`id`, `neighborhood`, `created_at`) VALUES (NULL, 'Buenos Aires', CURRENT_TIMESTAMP),(NULL, 'Caicedo', CURRENT_TIMESTAMP), (NULL, 'Juan Pablo II', CURRENT_TIMESTAMP),(NULL, 'Ocho de Marzo', CURRENT_TIMESTAMP),(NULL, 'Barrios de Jesús', CURRENT_TIMESTAMP),(NULL, 'Bomboná Nº 2', CURRENT_TIMESTAMP),(NULL, 'Los Cerros - El Vergel', CURRENT_TIMESTAMP),(NULL, 'Alejandro Echavarría', CURRENT_TIMESTAMP),(NULL, 'Miraflores', CURRENT_TIMESTAMP),(NULL, 'Cataluña', CURRENT_TIMESTAMP),(NULL, 'La Milagrosa', CURRENT_TIMESTAMP),(NULL, 'Gerona', CURRENT_TIMESTAMP),(NULL, 'El Salvador', CURRENT_TIMESTAMP),(NULL, 'Loreto', CURRENT_TIMESTAMP),(NULL, 'Asomadera Nº 1', CURRENT_TIMESTAMP),(NULL, 'Asomadera Nº 2', CURRENT_TIMESTAMP),(NULL, 'Asomadera Nº 3', CURRENT_TIMESTAMP),(NULL, 'Quinta Linda', CURRENT_TIMESTAMP),(NULL, 'Barrio Pablo Escobar', CURRENT_TIMESTAMP);

-- COMUNA #10
INSERT INTO `neighborhoods` (`id`, `neighborhood`, `created_at`) VALUES (NULL, 'La Candelaria', CURRENT_TIMESTAMP),(NULL, 'Prado', CURRENT_TIMESTAMP), (NULL, 'Jesús Nazareno', CURRENT_TIMESTAMP),(NULL, 'El Chagualo', CURRENT_TIMESTAMP),(NULL, 'Estación Villa', CURRENT_TIMESTAMP),(NULL, 'San Benito', CURRENT_TIMESTAMP),(NULL, 'Guayaquil', CURRENT_TIMESTAMP),(NULL, 'Corazón de Jesús - Barrio Triste', CURRENT_TIMESTAMP),(NULL, 'Calle Nueva', CURRENT_TIMESTAMP),(NULL, 'Perpetuo Socorro', CURRENT_TIMESTAMP),(NULL, 'Barrio Colón', CURRENT_TIMESTAMP),(NULL, 'Las Palmas', CURRENT_TIMESTAMP),(NULL, 'Bomboná Nº 1', CURRENT_TIMESTAMP),(NULL, 'Boston', CURRENT_TIMESTAMP),(NULL, 'Los Ángeles', CURRENT_TIMESTAMP),(NULL, 'Villa Nueva', CURRENT_TIMESTAMP),(NULL, 'San Diego', CURRENT_TIMESTAMP);

-- COMUNA #11
INSERT INTO `neighborhoods` (`id`, `neighborhood`, `created_at`) VALUES (NULL, 'Los Conquistadores', CURRENT_TIMESTAMP),(NULL, 'Laureles', CURRENT_TIMESTAMP), (NULL, 'Carlos E. Restrepo', CURRENT_TIMESTAMP),(NULL, 'Suramericana', CURRENT_TIMESTAMP),(NULL, 'Naranjal', CURRENT_TIMESTAMP),(NULL, 'San Joaquín', CURRENT_TIMESTAMP),(NULL, 'Bolivariana', CURRENT_TIMESTAMP),(NULL, 'Las Acacias', CURRENT_TIMESTAMP),(NULL, 'La Castellana', CURRENT_TIMESTAMP),(NULL, 'Lorena', CURRENT_TIMESTAMP),(NULL, 'El Velódromo', CURRENT_TIMESTAMP),(NULL, 'Estadio', CURRENT_TIMESTAMP),(NULL, 'Los Colores', CURRENT_TIMESTAMP),(NULL, 'Cuarta Brigada', CURRENT_TIMESTAMP),(NULL, 'Florida Nueva', CURRENT_TIMESTAMP);

-- COMUNA #12
INSERT INTO `neighborhoods` (`id`, `neighborhood`, `created_at`) VALUES (NULL, 'La América', CURRENT_TIMESTAMP),(NULL, 'Ferrini', CURRENT_TIMESTAMP), (NULL, 'Calasanz', CURRENT_TIMESTAMP),(NULL, 'Los Pinos', CURRENT_TIMESTAMP),(NULL, 'La Floresta', CURRENT_TIMESTAMP),(NULL, 'Santa Lucía', CURRENT_TIMESTAMP),(NULL, 'El Danubio', CURRENT_TIMESTAMP),(NULL, 'Campo Alegre', CURRENT_TIMESTAMP),(NULL, 'Santa Mónica', CURRENT_TIMESTAMP),(NULL, 'Barrio Cristóbal', CURRENT_TIMESTAMP),(NULL, 'Simón Bolívar', CURRENT_TIMESTAMP),(NULL, 'Santa Teresita', CURRENT_TIMESTAMP),(NULL, 'Calasanz Parte Alta', CURRENT_TIMESTAMP);

-- COMUNA #13
INSERT INTO `neighborhoods` (`id`, `neighborhood`, `created_at`) VALUES (NULL, 'San Javier Nº 1', CURRENT_TIMESTAMP),(NULL, 'San Javier Nº 2', CURRENT_TIMESTAMP), (NULL, 'El Pesebre', CURRENT_TIMESTAMP),(NULL, 'Blanquizal', CURRENT_TIMESTAMP),(NULL, 'Santa Rosa de Lima', CURRENT_TIMESTAMP),(NULL, 'Los Alcázares', CURRENT_TIMESTAMP),(NULL, 'Metropolitano', CURRENT_TIMESTAMP),(NULL, 'La Pradera', CURRENT_TIMESTAMP),(NULL, 'Juan XXIII', CURRENT_TIMESTAMP),(NULL, 'La Divisa', CURRENT_TIMESTAMP),(NULL, 'Veinte de Julio', CURRENT_TIMESTAMP),(NULL, 'Belencito', CURRENT_TIMESTAMP),(NULL, 'Betania', CURRENT_TIMESTAMP),(NULL, 'El Corazón', CURRENT_TIMESTAMP),(NULL, 'Las Independencias', CURRENT_TIMESTAMP),(NULL, 'Nuevos Conquistadores', CURRENT_TIMESTAMP),(NULL, 'El Salado', CURRENT_TIMESTAMP),(NULL, 'Eduardo Santos', CURRENT_TIMESTAMP),(NULL, 'Peñitas', CURRENT_TIMESTAMP),(NULL, 'Antonio Nariño', CURRENT_TIMESTAMP),(NULL, 'El Socorro', CURRENT_TIMESTAMP),(NULL, 'Calasania', CURRENT_TIMESTAMP);

-- COMUNA #14
INSERT INTO `neighborhoods` (`id`, `neighborhood`, `created_at`) VALUES (NULL, 'Castropol', CURRENT_TIMESTAMP),(NULL, 'Barrio Colombia', CURRENT_TIMESTAMP), (NULL, 'Villa Carlota', CURRENT_TIMESTAMP),(NULL, 'Lalinde', CURRENT_TIMESTAMP),(NULL, 'Manila', CURRENT_TIMESTAMP),(NULL, 'Las Lomas Nº 1', CURRENT_TIMESTAMP),(NULL, 'Las Lomas Nº 2', CURRENT_TIMESTAMP),(NULL, 'Altos del Poblado', CURRENT_TIMESTAMP),(NULL, 'El Tesoro', CURRENT_TIMESTAMP),(NULL, 'Los Naranjos', CURRENT_TIMESTAMP),(NULL, 'Los Balsos Nº 1', CURRENT_TIMESTAMP),(NULL, 'Los Balsos Nº 2', CURRENT_TIMESTAMP),(NULL, 'San Lucas', CURRENT_TIMESTAMP),(NULL, 'El Diamante Poblado', CURRENT_TIMESTAMP),(NULL, 'El Castillo', CURRENT_TIMESTAMP),(NULL, 'Alejandría', CURRENT_TIMESTAMP),(NULL, 'La Florida', CURRENT_TIMESTAMP),(NULL, 'El Poblado', CURRENT_TIMESTAMP),(NULL, 'Astorga', CURRENT_TIMESTAMP),(NULL, 'Patio Bonito', CURRENT_TIMESTAMP),(NULL, 'La Aguacatala', CURRENT_TIMESTAMP),(NULL, 'Santa María de Los Ángeles', CURRENT_TIMESTAMP);

-- COMUNA #15
INSERT INTO `neighborhoods` (`id`, `neighborhood`, `created_at`) VALUES (NULL, 'Tenche', CURRENT_TIMESTAMP),(NULL, 'Trinidad', CURRENT_TIMESTAMP), (NULL, 'Santa Fe', CURRENT_TIMESTAMP),(NULL, 'Campo Amor', CURRENT_TIMESTAMP),(NULL, 'Cristo Rey', CURRENT_TIMESTAMP),(NULL, 'Guayabal', CURRENT_TIMESTAMP),(NULL, 'La Colina', CURRENT_TIMESTAMP);

-- COMUNA #16   
INSERT INTO `neighborhoods` (`id`, `neighborhood`, `created_at`) VALUES (NULL, 'Belén Aguas Fría', CURRENT_TIMESTAMP),(NULL, 'Cerro Nutibara', CURRENT_TIMESTAMP), (NULL, 'Fátima', CURRENT_TIMESTAMP),(NULL, 'Rosales', CURRENT_TIMESTAMP),(NULL, 'Granada', CURRENT_TIMESTAMP),(NULL, 'San Bernardo', CURRENT_TIMESTAMP),(NULL, 'Las Playas', CURRENT_TIMESTAMP),(NULL, 'Diego Echavarria', CURRENT_TIMESTAMP),(NULL, 'La Mota', CURRENT_TIMESTAMP),(NULL, 'El Rincón', CURRENT_TIMESTAMP),(NULL, 'La Hondonada', CURRENT_TIMESTAMP),(NULL, 'La Loma de Los Bernal', CURRENT_TIMESTAMP),(NULL, 'La Gloria', CURRENT_TIMESTAMP),(NULL, 'Altavista', CURRENT_TIMESTAMP),(NULL, 'La Palma', CURRENT_TIMESTAMP),(NULL, 'Zafra', CURRENT_TIMESTAMP),(NULL, 'Los Alpes', CURRENT_TIMESTAMP),(NULL, 'Las Violetas', CURRENT_TIMESTAMP),(NULL, 'Las Mercedes', CURRENT_TIMESTAMP),(NULL, 'Nueva Villa de Aburrá', CURRENT_TIMESTAMP),(NULL, 'Miravalle', CURRENT_TIMESTAMP),(NULL, 'El Nogal - Los Almendros', CURRENT_TIMESTAMP);
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------