import React from 'react'
import {View, Text, FlatList, StyleSheet, SectionList} from 'react-native'



// export default function DemoListView(props) {
//     return (
//         <FlatList
//         style = { this.container} 
//         data = { [{key: "David"}, {key: "David2"}, {key: "David3"}, {key: "David4"}, {key: "David5"} ] }
//         renderItem = {({item}) => <Text style = { this.item}> { item.key }</Text>}>
//         </FlatList>
//     );
    
// }

export default function DemoSection(props) {
    return (
        <View style = {this.container}>
            <SecsionList
                sections = {[
                    {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
                    {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                ]}
                renderItem = { ({item}) => <Text style = { styles.item }> {item}</Text>}
                renderSectionHeader = {({section}) => <Text style = {styles.sectionHeader}> {section.title} </Text>}
                keyExtractor = {(item, index) => index}
            />
        </View>
    );
    
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 25,
        borderColor: 'blue',
        borderWidth: 2
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
      },
}) 

