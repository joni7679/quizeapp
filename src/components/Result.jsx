import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import QuestionSheet from "./QuestionSheet";

const Result = ({ answers ,score}) => {
    return (
        <div className="flex items-center justify-center">
            <PDFDownloadLink
                document={<QuestionSheet answers={answers}  score={score}/>}
                fileName="result-answers.pdf"
            >
                {({ loading }) =>
                    loading ? (
                        <button className="px-4 py-2 bg-gray-500 text-white rounded-lg">
                            Preparing...
                        </button>
                    ) : (
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                            Download PDF
                        </button>
                    )
                }
            </PDFDownloadLink>
        </div>
    );
};

export default Result;
