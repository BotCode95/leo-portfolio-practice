import { Grid } from '@mui/material'
import React from 'react'
import data from '../data/proyectos.json'
import { Navegador } from '../components/Navegador/Navegador'

export const Portfolio = () => {
	return (
		<>
			{/* navegador */}
			<Navegador />
			<Grid container>
				{data.proyectos.map((proyecto) => (
					<Grid item xs={12} md={6} key={proyecto.id} className="box_portfolio">
						Proyecto : {proyecto.title}
						{/* imagem */}
						<div style={{ width: '100%', height: 200 }}></div>
						Descripcion: {proyecto.description}
					</Grid>
				))}
			</Grid>
		</>
	)
}
