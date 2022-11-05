import { FC } from 'react'
import { Grid } from '@mui/material'
import style from './Footer.module.scss'
export const Footer: FC = () => {
	return (
		<footer>
			<div className={style.footer}>
				<span>Developed by M.K. | </span>
			</div>
		</footer>
	)
}
