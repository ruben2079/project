export interface ExamResult {
    programType: string;
    examPart: string;
    adminName: string;
    hasViolation: boolean;
    result: string;
    downloadResultsLetterURL: string;
    downloadQuartilesURL: string;
}