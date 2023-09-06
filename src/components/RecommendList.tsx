import {styled} from 'styled-components';
import SearchItem from './SearchItem';

interface Props {
	list?: string[];
}

const RecommendList = ({list}: Props) => {
	return (
		<>
			<RecommendListContainer>
				<p>추천 검색어</p>
				{list && (
					<ul>
						{list.map((item, index) => (
							<li key={`recommend_${index}`}>
								<SearchItem>{item}</SearchItem>
							</li>
						))}
					</ul>
				)}
			</RecommendListContainer>
		</>
	);
};

const RecommendListContainer = styled.div`
	p {
		padding: 0 24px;
		color: ${props => props.theme.blueGrey};
		font-size: 13px;
		letter-spacing: -0.018em;
		line-height: 1.6;
	}
`;

export default RecommendList;
