import {styled} from 'styled-components';

interface Props {
	list?: string[];
}

const RecentList = ({list}: Props) => {
	return (
		<>
			<RecentListContainer>
				<p>최근 검색어</p>
				{list ? (
					list.map((item, index) => <span key={`recent_${index}`}>{item}</span>)
				) : (
					<h6>최근 검색어가 없습니다</h6>
				)}
			</RecentListContainer>
		</>
	);
};

const RecentListContainer = styled.div`
	padding: 0 24px;

	&:not(:last-child) {
		padding-bottom: 24px;
		margin-bottom: 24px;
		border-bottom: 1px solid ${props => props.theme.lightGrey};
	}

	p {
		color: ${props => props.theme.blueGrey};
		font-size: 13px;
		letter-spacing: -0.018em;
		line-height: 1.6;
	}

	h6 {
		color: ${props => props.theme.grey};
		font-size: 1rem;
		font-weight: 400;
		letter-spacing: -0.018em;
		line-height: 1.6;
		margin-top: 16px;
	}
`;

export default RecentList;
