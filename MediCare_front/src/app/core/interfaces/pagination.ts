interface pagination<T> {
    count: number;
    next: string;
    previous:string;
    results: T[];
}