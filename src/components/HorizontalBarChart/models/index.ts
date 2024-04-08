interface Dataset {
    label: string;
    data: number[];
    backgroundColor: string;
}

interface ChartDataType {
    labels: string[];
    datasets: Dataset[];
}

interface ChartOptionsType {
    indexAxis: 'x' | 'y';
    layout?: {
        padding: number | {
            left?: number;
            right?: number;
            top?: number;
            bottom?: number;
        };
    };
}

export type {
    ChartDataType,
    ChartOptionsType,
}