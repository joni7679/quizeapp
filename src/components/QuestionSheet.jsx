import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import React from 'react';

const styles = StyleSheet.create({
    page: {
        padding: 20,
        flexDirection: 'column',
        backgroundColor: '#ffffff',
    },
    heading: {
        fontSize: 20,
        textAlign: "center",

    },
    flex: {
        display: "flex",
        alignContent: "center",
        gap: 10,
        justifyContent: "center"
    },
    questionBlock: {
        marginBottom: 15,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    questionTitle: {
        fontSize: 12,
        marginBottom: 6,
    },
    option: {
        fontSize: 11,
        marginBottom: 4,
        padding: 6,
        borderRadius: 4,
    },
    correct: {
        backgroundColor: 'green',
        color: 'white'
    },
    wrong: {
        backgroundColor: 'red',
        color: 'white'
    },
    answerLine: {
        padding: 6,
        marginTop: 8,
        backgroundColor: 'green',
        color: 'white',
        borderRadius: 4,
        fontSize: 11,
    }
});

// Create Document Component
const QuestionSheet = ({ answers, score }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <Text style={styles.heading}>Basic FrontEnd Sem Exam</Text>
            <View style={styles.flex}>
                <View>
                    <Text style={styles.heading}>Student Name : Joni Halder</Text>
                </View>
                <View>
                    <Text style={styles.heading}>50 min Exam</Text>
                </View>
                <View>
                    <Text style={styles.heading}>Exam Score : {score}</Text>
                </View>
            </View>

            {answers.map((val, index) => (
                <View key={index} style={styles.questionBlock}>
                    <Text style={styles.questionTitle}>{index + 1}. {val.questions}</Text>

                    {val.option.map((o, i) => {
                        const isCorrectSelected = o === val.rightAnswer && o === val.myAnswer;
                        const isWrongSelected = o === val.myAnswer && o !== val.rightAnswer;

                        return (
                            <Text
                                key={i}
                                style={[
                                    styles.option,
                                    isCorrectSelected && styles.correct,
                                    isWrongSelected && styles.wrong
                                ]}
                            >
                                {o}
                            </Text>
                        );
                    })}

                    <Text style={styles.answerLine}>Correct Answer: {val.rightAnswer}</Text>
                </View>
            ))}
        </Page>
    </Document>
);

export default QuestionSheet;
