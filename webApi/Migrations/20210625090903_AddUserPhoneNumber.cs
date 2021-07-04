using Microsoft.EntityFrameworkCore.Migrations;

namespace webApi.Migrations
{
    public partial class AddUserPhoneNumber : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "phonenumber",
                table: "Users",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "phonenumber",
                table: "Users");
        }
    }
}
