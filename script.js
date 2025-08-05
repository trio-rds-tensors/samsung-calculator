    
	let dot=false;
	function backspace()
    {
		if( document.querySelector(".box").value.at(-1) == '.')
		{
			dot = false;
		}
      document.querySelector(".box").value=document.querySelector(".box").value.slice(0,-1);
	  let value = document.querySelector(".box").value;
	  const opt ="+-x÷%()";
	  for(const i of value)
	  {
		  if(i == '.')
		  {
			  dot = true;
		  }
		  if(opt.includes(i))
		  {
			  dot = false;
		  }
		  
	  }
	  
    }
    
    function addoperator(op)
    {
	  if(document.querySelector(".box").value == '' && (op == '+' || op == '-'||op == 'x'||op == '÷'||op=='%'))
      {
        document.querySelector(".box").value = '';
      }
      else
      {
        let val = document.querySelector(".box").value;
        const opt = "+-x÷%";
        if(opt.includes(val.at(-1)))
        {
          backspace();
          document.querySelector(".box").value += op;
        }
        else if(val.at(-1) == '.')
        {
          document.querySelector(".box").value=document.querySelector(".box").value;
        }
        else if(val.at(-1) =='(')
        {
          document.querySelector(".box").value=document.querySelector(".box").value;
        }
        else
        {
          document.querySelector(".box").value += op;
        }
      }
	  dot = false;
    }
    function add_dot()
    {
	  if(dot)
	  {
		 document.querySelector(".box").value=document.querySelector(".box").value;
		 return;
	  }
      if(document.querySelector(".box").value=='')
      {
        document.querySelector(".box").value+='0.';
      }
      else
      {
        let num ="0123456789";
        if(document.querySelector(".box").value.at(-1) == '.')
        {
          document.querySelector(".box").value=document.querySelector(".box").value;
        }
        else if(!num.includes(document.querySelector(".box").value.at(-1)))
        {
          document.querySelector(".box").value+='0.';
        }
        else
        {
          document.querySelector(".box").value+='.';
        }
      }
	  dot = true;
    }
    function add_backet()
    {
        let val = document.querySelector(".box").value;
        let open = 0;
        let close = 0;
        let opt = "+-x÷%";
        let num = "1234567890";
        for(const char of val)
        {
          if(char == '(')
          {
            open++;
          }
          if(char == ')')
          {
              close++;
          }
        }
        if(open==close &&(num.includes(val.at(-1)) || val.at(-1) == ')'))
        {
          document.querySelector(".box").value+='x(';
        }
        else if(opt.includes(val.at(-1)))
        {
          document.querySelector(".box").value+='(';
        }
        else if(num.includes(val.at(-1)))
        {
          document.querySelector(".box").value+=')';
        }
        else if(val.at(-1) == '(')
        {
          document.querySelector(".box").value+='(';
        }
        else if(open > close)
        {
          document.querySelector(".box").value+=')';
        }
        else
        {
          document.querySelector(".box").value+='(';
        }
		dot=false;
    }
    function addvalue(value)
    {
      if(document.querySelector(".box").value == '0')
      {
        document.querySelector(".box").value = value;
      }
      else
      {
        document.querySelector(".box").value += value;
      }
    }
    
    function clearbox()
    {
      document.querySelector(".box").value='';
    }
    function sign_change()
    {
      let val=document.querySelector(".box").value;
      const op='+-x÷%)';
      const num='0123456789';
      let part1='';
      let part2 = '';
      if(num.includes(val.at(-1)))
      {
        let i= -1;
        while(num.includes(val.at(i)))
        {
          i--;
        }
        
        part1 = val.slice(0,i+1);
        part2=val.slice(i+1);
        document.querySelector(".box").value = part1;
        add_backet();
        document.querySelector(".box").value += '-'+part2;
      }
      else
      {
        add_backet();
        document.querySelector(".box").value+='-';
      }
      
    }

    function Submit()
    {
      let open = 0;
      let close = 0;
      let num = "1234567890";
      let val = document.querySelector(".box").value;
      for(const char of val)
        {
          if(char == '(')
          {
            open++;
          }
          if(char == ')')
          {
              close++;
          }
        }
      if(open==close && (num.includes(val.at(-1)) || val.at(-1) == ')'))
      {
        document.querySelector(".form").submit();
      }  
    }
    
    function result(value)
    {
      document.querySelector(".box").value = value;
    }

      