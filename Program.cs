using Microsoft.AspNetCore.StaticFiles;
using Microsoft.AspNetCore.Localization;
using System.Globalization;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

// Add localization services
builder.Services.AddLocalization(options => options.ResourcesPath = "Resources");

// Add MVC with localization
builder.Services.AddControllersWithViews()
    .AddViewLocalization()
    .AddDataAnnotationsLocalization();

// Configure supported cultures
builder.Services.Configure<RequestLocalizationOptions>(options =>
{
    var supportedCultures = new[]
    {
        new CultureInfo("sr"),
        new CultureInfo("en")
    };

    options.DefaultRequestCulture = new RequestCulture("sr");
    options.SupportedCultures = supportedCultures;
    options.SupportedUICultures = supportedCultures;
});

// Set default culture for the application
CultureInfo.DefaultThreadCurrentCulture = new CultureInfo("sr");
CultureInfo.DefaultThreadCurrentUICulture = new CultureInfo("sr");

// Removed AddRazorPages as we are focusing on MVC for the default map view
// builder.Services.AddRazorPages();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();

// Explicitly configure StaticFileOptions for JavaScript files
var contentTypeProvider = new FileExtensionContentTypeProvider();
contentTypeProvider.Mappings[".js"] = "application/javascript";

app.UseStaticFiles(new StaticFileOptions
{
    ContentTypeProvider = contentTypeProvider
});

app.UseRouting();

// Add localization middleware
app.UseRequestLocalization();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=POI}/{action=Map}/{id?}");

// Removed MapRazorPages as we are focusing on MVC for the default map view
// app.MapRazorPages();

app.Run();
