import React from 'react';
import {ScrollView, View} from 'react-native';
import {styled} from 'styled-components/native';
import HomeDate from './HomeDate';
import HomeFavortie from './HomeFavorite';
import HomeHeader from './HomeHeader';
import HomeHot from './HomeHot';
import HomeSubjectFilter from './HomeSubjectFilter';
import {yearDummy} from 'constants/dummey';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function () {
  const {top} = useSafeAreaInsets();

  return (
    <StyledView>
      <ScrollView>
        <View style={{height: top, backgroundColor: '#282828'}} />
        <HomeHeader userName="soft" list={yearDummy} />
        <HomeSubjectFilter
          subjects={[
            {iconName: 'mail-outline', subjectName: '편지'},
            {iconName: 'music-note', subjectName: '음악'},
            {iconName: 'checkroom', subjectName: '패션'},
            {iconName: 'movie', subjectName: '영화'},
            {iconName: 'live-tv', subjectName: '드라마'},
            {iconName: 'manga', subjectName: '만화'},
            {iconName: 'attractions', subjectName: '예능'},
          ]}
        />
        <HomeDate lockDate="2023-06-27" createDate="2023-05-12" />
        <HomeFavortie
          boards={[
            {
              boardName: '2010년대 음악게시판',
              boardTitle: '소녀시대 멤버들이 개별적으로...',
              newBoard: true,
            },
            {
              boardName: '2000년대 패션게시판',
              boardTitle: '2000년대 팝 프린세스와 스트릿...',
              newBoard: true,
            },
            {
              boardName: '1990년대 만화게시판',
              boardTitle: '슬램덩크 고전 명장면 모음: 가슴 벅...',
              newBoard: false,
            },
            {
              boardName: '2000년대 예능게시판',
              boardTitle: '지금봐도 난리나는 엑스맨 명장...',
              newBoard: true,
            },
          ]}
        />
        <HomeHot />
      </ScrollView>
    </StyledView>
  );
}

const StyledView = styled.View`
  flex: 1;
  background-color: #f5f5f5;
`;
