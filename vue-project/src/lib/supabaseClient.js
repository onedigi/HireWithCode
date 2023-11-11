/*
 * @Author: laiminqi 2804627211@qq.com
 * @Date: 2023-11-09 11:27:04
 * @LastEditors: laiminqi 2804627211@qq.com
 * @LastEditTime: 2023-11-10 01:07:27
 * @FilePath: \studying-project\interview\HireWithCode\vue-project\src\lib\supabaseClient.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://bqxuljcegchnwezuyjpp.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxeHVsamNlZ2NobndlenV5anBwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk0OTg0MDksImV4cCI6MjAxNTA3NDQwOX0._z8LIiOXL-ptPJRXMARJMynTkChKnPCDhVVpZxQG8MI')