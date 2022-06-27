import './featuredInfo.css';

import { useState, useEffect } from 'react';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';

import { userRequest } from '../../requestMethods';

export default function FeaturedInfo() {
	const [income, setIncome] = useState([]);
	const [perc, setPerc] = useState(0);

	useEffect(() => {
		const getIncome = async () => {
			try {
				const res = await userRequest.get('/orders/income');
				setIncome(res.data);
				setPerc((res.data[1].total * 100) / res.data[0].total - 100);
			} catch (err) {
				console.log(err);
			}
		};

		getIncome();
	}, []);

	return (
		<div className="featured">
			<div className="featuredItem">
				<span className="featuredTitle">Revenue</span>
				<div className="featuredMoneyContainer">
					<span className="featuredMoney">${income[1]?.total}</span>
					<span className="featuredMoneyRate">
						{Math.floor(perc)}%{' '}
						{perc < 0 ? (
							<ArrowDownward className="featuredIcon negative" />
						) : (
							<ArrowUpward className="featuredIcon" />
						)}
					</span>
				</div>
				<span className="featuredSub">Compared to last month</span>
			</div>
		</div>
	);
}
