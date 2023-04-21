## I﻿ntroduction

Starknet es una Capa de Rollup de Validez 2. Proporciona altos costes de producción, bajos costos de gas y mantiene los niveles de seguridad de la capa 1 de Ethereum

Dado un rompecabezas de sudoku, verificar una solución es más fácil que resolver desde cero. Si nuestro objetivo es convencer a la gente de la declaración “este rompecabezas ha sido resuelto”, podemos ahorrar un montón de cómputo haciendo que una persona calcule una solución y luego propagarla para que otros lo verifiquen. En esta estrategia, cada cálculo de una solución se convierte en un evento único que no requiere replicación por parte de la sociedad. En una línea similar, Starknet escala Ethereum reemplazando el cálculo L1 pesado por más ligero (por lo tanto, más barato) Verificación L1 usando pruebas de STARK computadas fuera de la cadena.

## A continuación funciona

Con la analogía anterior en mente, el tiempo está maduro para algo de jerga. Starknet es una válvula sin permisos (también conocida como “ZK-Rollup”) que soporta el cálculo general y opera actualmente en producción como una red L2 sobre Ethereum. La eventual seguridad L1 de Starknet está asegurada por el uso del sistema criptográfico más seguro y escalable – [STARK](https://starkware.co/stark/).

Los contratos Starknet están escritos (en su mayoría) en el lenguaje de El Cairo – Un completo lenguaje de programación Turing diseñado para pruebas STARK.