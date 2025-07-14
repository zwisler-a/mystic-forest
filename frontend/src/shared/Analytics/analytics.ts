const sa = (window as any).sa;
export const report = (event: string) => {
    if (sa == undefined) return;
    sa(event);
}