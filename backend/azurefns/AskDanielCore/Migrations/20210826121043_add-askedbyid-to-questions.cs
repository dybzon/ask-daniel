using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace AskDanielCore.Migrations
{
    public partial class addaskedbyidtoquestions : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "AskedById",
                table: "Questions",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AskedById",
                table: "Questions");
        }
    }
}
