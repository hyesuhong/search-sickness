import * as S from '../styles/SearchList.styled';
import SearchItem from './SearchItem';

interface Props {
	list?: string[];
}

const RecommendList = ({list}: Props) => {
	return (
		<>
			<S.Container>
				<S.Subtitle>추천 검색어</S.Subtitle>
				{list ? (
					<ul>
						{list.map((item, index) => (
							<li key={`recommend_${index}`}>
								<SearchItem>{item}</SearchItem>
							</li>
						))}
					</ul>
				) : (
					<S.emptyText>추천 검색어가 없습니다</S.emptyText>
				)}
			</S.Container>
		</>
	);
};

export default RecommendList;
