Handlebars.registerHelper('if_eq', function(a: any, b: any, opts: any): boolean {
    if(a == b)
        return opts.fn(this);
    else
        return opts.inverse(this);
});
