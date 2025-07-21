export const report = (event: string) => {
    setTimeout(() => {
        const sa = (window as any).sa;
        if (sa == undefined) return;
        sa(event);
    }, 500)
}