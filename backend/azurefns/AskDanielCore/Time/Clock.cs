using System;

namespace AskDanielCore.Time
{
	public class Clock : IClock
	{
		public DateTime Now() => DateTime.Now;
	}
}
