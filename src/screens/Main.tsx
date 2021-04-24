import React, { FC } from "react";
import { FlatList } from "react-native-gesture-handler";
import { StyleSheet, View } from "react-native";
import { Appbar, Headline } from "react-native-paper";
import { useSelector } from "react-redux";
import ApplicationCard from "../components/ApplicationCard";
import { RootState } from "../reducers";

const ApplicationHistory: FC = () => {
    const { applications } = useSelector((state: RootState) => state.app);
    return (
        <>
            <Appbar.Header statusBarHeight={0}>
                <Appbar.Content title="История заявок" />
            </Appbar.Header>
            <FlatList
                ListEmptyComponent={
                    <View style={styles.placeholderContainer}>
                        <Headline>Пока нет заявок</Headline>
                    </View>
                }
                data={applications}
                keyExtractor={item => "" + item.id}
                renderItem={({ item }) => (
                    <ApplicationCard application={item} />
                )}
            />
        </>
    );
};

export default ApplicationHistory;

const styles = StyleSheet.create({
    placeholderContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
