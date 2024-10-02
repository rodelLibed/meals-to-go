import { useContext, useState } from "react";
import styled from "styled-components";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../components/services/location/location-context";

const SearchContainer = styled(View)`
  padding: 16px;
`;

export const Search = ({ isFavouriteToggled, onFavouritesToggle }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyWord] = useState(keyword);

  return (
    <SearchContainer>
      <Searchbar
        icon={isFavouriteToggled ? "heart" : "heart-outline"}
        onIconPress={onFavouritesToggle}
        placeholder="Search for location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyWord(text);
        }}
      />
    </SearchContainer>
  );
};
