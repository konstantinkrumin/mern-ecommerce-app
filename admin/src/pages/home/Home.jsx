import './home.css';

import { useState, useMemo, useEffect } from 'react';

import Chart from '../../components/chart/Chart';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';

import { userRequest } from '../../requestMethods';

import { userData } from '../../dummyData';

export default function Home() {
	const [userStats, setUserStats] = useState([]);

	const MONTHS = useMemo(
		() => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		[]
	);

	useEffect(() => {
		const getStats = async () => {
			try {
				const res = await userRequest.get('/users/stats');
				res.data.map(item =>
					setUserStats(prev => [
						...prev,
						{ name: MONTHS[item._id - 1], 'Active User': item.total }
					])
				);
			} catch (err) {
				console.log(err);
			}
		};

		getStats();
	}, [MONTHS]);

	return (
		<div className="home">
			<FeaturedInfo />
			<Chart data={userStats} title="User Analytics" grid dataKey="Active User" />
			<div className="homeWidgets">
				<WidgetSm />
				<WidgetLg />
			</div>
		</div>
	);
}
